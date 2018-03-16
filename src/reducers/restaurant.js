import * as actions from '../actions';
//import {union} from 'lodash';
import _ from 'lodash';
import {normalizeRestaurant, normalizeDish, normalizeReview} from '../utils/normalizer';

const initialState = {
    restaurants: {},
    dishes: {},
    reviews: {}
}
initialState.restaurants
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
                restaurants: Object.assign({}, state.restaurants, normalizedData),
                dishes: {},
                reviews: {} 
            }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            console.log("Case: Fetch all restaurants succes ");
            let normalizedDishes = [];
            let normalizedReviews = [];
            //normalize each restaurant in the payload
            const normalizedArray = action.payload.map(restaurant => normalizeRestaurant(restaurant));
           
            action.payload.forEach(restaurant => {
                normalizedDishes = restaurant.dishes.map(dish => normalizeDish(dish)) 
                restaurant.dishes.forEach(dish => dish.reviews.map(review => normalizedReviews.push(normalizeReview(review))))
            })

             return(Object.assign({}, state, {
                 restaurants: Object.assign({}, state.restaurants, ...normalizedArray),
                 dishes: Object.assign({}, state.dishes, ...normalizedDishes),
                 reviews: Object.assign({}, state.reviews, ...normalizedReviews)
             }))
            
        case actions.DELETE_RESTAURANT_SUCCESS:
            console.log("Case: Delete restaurant succes ");
            const restaurantId = action.payload.id;
            //Get the keys of all state.restaurants
            const keys = Object.keys(state.restaurants);
            // remove the restaurant object from the restaurants in state
            const filteredRestaurants = _.omitBy(state.restaurants, (value, key) => key == restaurantId);

            // remove the dishes of the deleted restaurant from the dishes object in the state
            const dishIdsOfDeletedRestaurant = state.restaurants[restaurantId].dishIds;
            const filteredDishes = _.omit(state.dishes, dishIdsOfDeletedRestaurant );

            console.log(filteredDishes);

            console.log(filteredDishes.reviewIds)
            //remove reviews of the dishes in the deleted restaurant
            //const reviewIdsOfDeletedDishes = 
            const dishesToDelete = _.pick(state.dishes, dishIdsOfDeletedRestaurant); //got the dishes to be deleted
            
       

           // console.log(_.omit(state.reviews, reviewsIdsToDelete));

            return(Object.assign({}, state, {
                restaurants:  Object.assign({}, filteredRestaurants),
                dishes: Object.assign({}, filteredDishes)
            }));

        case actions.EDIT_RESTAURANT_SUCCESS:
            console.log("Case: Edit restaurant succes ");
            return(Object.assign({}, state, {
                restaurants: [...action.payload] 
            }));

        case actions.FETCH_ALL_DISHES_SUCCESS: 
            console.log("Case: Fetch all dishes succes ");
            const restId = action.payload[0].restId;
            const cachedRestaurant = state.restaurants[restId]// find the matching restaurant in the state
            const restaurant = Object.assign({}, cachedRestaurant, {dishIds: _.union(cachedRestaurant.dishIds, action.payload.map(dish => dish.id))})
            console.log(cachedRestaurant.dishIds, action.payload.map(dish => dish.id));
     
            const dishes = action.payload.map((dish) => normalizeDish(dish)) //normalize each dish in the api response and add to a new array
            const reviewsNormalized = action.payload.map(dish => 
                 dish.reviews.forEach(review => normalizeReview(review)) //normalize each review in each dish
            )
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[restId]: restaurant}),
                dishes: Object.assign({},  state.dishes, ...dishes),
                reviews: Object.assign({}, state.reviews,  ...reviewsNormalized)
            }))
     
        case actions.ADD_DISH_SUCCESS:
            console.log("Case: Add dish succes ");
            const normalizedDish = normalizeDish(action.payload); // normalize the dish in the api response
           // const matchRestaurantKey = Object.keys(state.restaurants).find(key => key == action.payload.restId) //find the matching restaurant in the state
            //state.restaurants[matchRestaurantKey].dishIds.push(action.payload.id) // add the new dish id to the dishIds array
            const rId = action.payload.restId;
            const matchRestaurant = state.restaurants[rId];
            const updatedRestaurant = Object.assign({}, matchRestaurant, {
                dishIds: _.concat(matchRestaurant.dishIds, action.payload.id)
            });
            const normalizedDishReview = normalizeReview(action.payload.reviews[0]);
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[rId]: updatedRestaurant}),
                dishes: Object.assign({},  state.dishes, normalizedDish),
                reviews: Object.assign({},  state.reviews, normalizedDishReview)
            }))

        case actions.DELETE_DISH_SUCCESS:
            console.log("Case: Delete dish succes ");
            const dishIdToDelete =  action.payload.id;
            const resId = action.payload.restId;

            //remove the dish from dishes object in the state
            const filterDishes = _.omitBy(state.dishes, (value, key) => key == dishIdToDelete); 

            //remove the dishId from restaurant.dishIds array in the state
            const remainingDishIds = _.without(state.restaurants[resId].dishIds, dishIdToDelete ) 

            //remove the reviews of the deleted dish from the state
            const updatedReviews = _.omit(state.reviews, state.dishes[dishIdToDelete].reviewIds);

            //update the restaurant with new array of dishIds
            const updatedRest = Object.assign({}, state.restaurants[resId], {dishIds: remainingDishIds}) 
      
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[resId]: updatedRest}),
                dishes: Object.assign({},  filterDishes),
                reviews:Object.assign({}, updatedReviews)
            }))

        case actions.EDIT_DISH_SUCCESS:
            console.log("Case: Edit dish succes ");
            return state;

        case actions.ADD_DISH_REVIEW_SUCCESS:
            console.log("Case: Add dish review succes ");
            const idOfDish = action.payload.dishId;
            const normalizedReview = normalizeReview(action.payload);
            console.log(normalizedReview)
            return (Object.assign({}, state, {
                reviews: Object.assign({}, state.reviews, normalizedReview)
            }))

        case actions.FETCH_ALL_REVIEWS_SUCCESS:
            console.log("Case: Fetch all dish reviews succes ");
            const normalizedDishReviews = action.payload.map((review) => normalizeReview(review)) //normalize each review 
            const cachedDish = state.dishes[action.payload[0].dishId];
            const dish = Object.assign({}, cachedRestaurant, {reviewIds: _.union(cachedDish.reviewIds, action.payload.map(review => review.id))})
            console.log(cachedDish.reviewIds, action.payload.map(review => review.id));

            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants),
                dishes: Object.assign({},  state.dishes),
                reviews: Object.assign({}, state.reviews, ...normalizedDishReviews)
            }))
            
        default: return state;
    }

    
}
// fetch all reviews 