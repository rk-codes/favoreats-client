import * as actions from '../actions';
import _ from 'lodash';
import {normalizeRestaurant, normalizeDish, normalizeReview} from '../utils/normalizer';
import {mapDishToReviewIds} from '../utils/mapper';

const initialState = {
    restaurants: {},
    dishes: {},
    reviews: {}
}
/*
const initialState = {
    restaurants: {
        1: {
            name: 'sfgf',
            location: 'dg',
            cuisine: 'sfdf',
            dishIds: [1, 2]
        }
    },
    dishes: {
        1: {
            name: 'dish name',
            reviewIds: [1, 2]
        },
        2: {
            name: 'dish name',
            reviewIds: [1, 2]
        }
    },
    reviews: {
        1: {
            rating: 2,
            description: 'sgrsgr'
        }
    }
} 
*/


export default  (state=initialState, action) => {
    switch(action.type) {
        case actions.ADD_RESTAURANT_SUCCESS:
            console.log("Case: Add restaurant succes ");

            //normalize restaurant
            const normalizedData = normalizeRestaurant(action.payload);

            //update restaurants in state
            return(Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, normalizedData)
            }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            console.log("Case: Fetch all restaurants succes ");
         
            console.log(action.payload);
            //normalize each restaurant in the payload
            const restaurants = action.payload.map(restaurant => normalizeRestaurant(restaurant));
            console.log(restaurants);

             return(Object.assign({}, state, {
                 restaurants: Object.assign({}, state.restaurants, ...restaurants)
       
             }))
            
        case actions.DELETE_RESTAURANT_SUCCESS:
            console.log("Case: Delete restaurant succes ");
            const restaurantId = action.payload.id;
            console.log(restaurantId, typeof(restaurantId))
            console.log(Object.keys(state.restaurants));

            let filteredDishes = {};
            let filteredReviews = {};
       
            // remove the restaurant object from the restaurants in state
            const filteredRestaurants = _.omitBy(state.restaurants, (value, key) => key == restaurantId);
            console.log(filteredRestaurants);

            // remove the dishes of the deleted restaurant from the dishes object in the state
          
            if(state.restaurants[restaurantId].dishIds.length !== 0) { //check if the deleted restaurant has any dishes

                const dishIdsOfDeletedRestaurant = state.restaurants[restaurantId].dishIds;
                filteredDishes = _.omit(state.dishes, dishIdsOfDeletedRestaurant );
            
                console.log(dishIdsOfDeletedRestaurant);
                console.log(state.dishes);
                // delete the reviews of the dishes 
         
                const reviewIdsOfDeletedRestaurant = mapDishToReviewIds(dishIdsOfDeletedRestaurant.map(id => state.dishes[id]));
                filteredReviews = _.omit(state.review, reviewIdsOfDeletedRestaurant );

            }

            return(Object.assign({}, state, {
                restaurants:  Object.assign({}, state.restaurants, filteredRestaurants),
                dishes: Object.assign({}, state.dishes, filteredDishes),
                reviews: Object.assign({}, state.reviews, filteredReviews)
            }));

        case actions.EDIT_RESTAURANT_SUCCESS:
            console.log("Case: Edit restaurant succes ");
            return(Object.assign({}, state, {
                restaurants: [...action.payload] 
            }));

        case actions.FETCH_ALL_DISHES_SUCCESS: 
            console.log("Case: Fetch all dishes succes ");

            //normalize each dish in the payload 
            const dishes = action.payload.map((dish) => normalizeDish(dish)) 
     
            // find the matching restaurant in the state
            const restId = action.payload[0].restaurant;
            const cachedRestaurant = state.restaurants[restId];

            //add dishIds of all the dishes to the dishIds array of the restaurant
            const restaurant = Object.assign({}, cachedRestaurant, {dishIds: _.union(cachedRestaurant.dishIds, action.payload.map(dish => dish.id))})
          
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[restId]: restaurant}),
                dishes: Object.assign({},  state.dishes, ...dishes)
            }))
     
        case actions.ADD_DISH_SUCCESS:
            console.log("Case: Add dish succes ");

            // normalize the dish in the payload
            const normalizedDish = normalizeDish(action.payload); 
            
            //find the matching restaurant
            const rId = action.payload.restaurant;
            const matchRestaurant = state.restaurants[rId];

            //add the dishId to the dishIds array in the matching restaurant
            const updatedRestaurant = Object.assign({}, matchRestaurant, {
                dishIds: _.concat(matchRestaurant.dishIds, action.payload.id)
            });
            
            console.log(matchRestaurant);
            console.log(updatedRestaurant);
    
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[rId]: updatedRestaurant}),
                dishes: Object.assign({},  state.dishes, normalizedDish)
            }))

        case actions.DELETE_DISH_SUCCESS:
            console.log("Case: Delete dish succes ");
            const dishIdToDelete =  action.payload.id;
            const resId = action.payload.restaurant;

            //remove the dish from dishes object in the state
            const filterDishes = _.omitBy(state.dishes, (value, key) => key === dishIdToDelete); 
          
            //remove the dishId from the dishIds of the restaurant of the deleted dish
            const remainingDishIds = _.without(state.restaurants[resId].dishIds, dishIdToDelete ) 
            //update the restaurant with new array of dishIds
            const updatedRest = Object.assign({}, state.restaurants[resId], {dishIds: remainingDishIds}) 

            //remove the reviews of the deleted dish from the reviews
            const updatedReviews = _.omit(state.reviews, state.dishes[dishIdToDelete].reviewIds);

            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[resId]: updatedRest}),
                dishes: Object.assign({},  state.dishes, filterDishes),
                reviews:Object.assign({}, state.reviews, updatedReviews)
            }))

        case actions.EDIT_DISH_SUCCESS:
            console.log("Case: Edit dish succes ");
            return state;

        case actions.ADD_DISH_REVIEW_SUCCESS:
            console.log("Case: Add dish review succes ");
           
            //normalize review in the payload
            const normalizedReview = normalizeReview(action.payload);

            //find the matching dish to update the reviewIds
            const idOfDish = action.payload.dishId;
            const matchDish = state.dishes[idOfDish];

            //add the reviewId to the dish
            const updatedDish = Object.assign({}, matchDish, {
                reviewIds: _.concat(matchDish.reviewIds, action.payload.id)
            });

            return (Object.assign({}, state, {
                dishes: Object.assign({}, state.dishes, {[idOfDish]: updatedDish}),
                reviews: Object.assign({}, state.reviews, normalizedReview)
            }))

        case actions.FETCH_ALL_REVIEWS_SUCCESS:
            console.log("Case: Fetch all dish reviews succes ");

            //normalize each review in the payload
            const normalizedDishReviews = action.payload.map((review) => normalizeReview(review)) 

            //find the matching dish to update the reviewIds
            //const matchingDishId = action.payload[0].dishId

            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants),
                dishes: Object.assign({},  state.dishes),
                reviews: Object.assign({}, state.reviews, ...normalizedDishReviews)
            }))
            
        default: return state;
    }

    
}
// fetch all reviews 