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
            const normalizedData = normalizeRestaurant(action.payload);
            return(Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, normalizedData),
                dishes: {},
                reviews: {} 
            }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            console.log("Case: Fetch all restaurants succes ");
            let normalizedArray = [];
            let normalizedDishes = [];
            let normalizedReviews = [];
            action.payload.forEach(restaurant => {
                normalizedArray.push(normalizeRestaurant(restaurant)); //normalize each restaurant in the api response and add them to a new array 
                restaurant.dishes.forEach(dish => normalizedDishes.push(normalizeDish(dish))) //change to map
                restaurant.dishes.forEach(dish => dish.reviews.map(review => normalizedReviews.push(normalizeReview(review))))
            })

            //console.log(normalizedReviews);
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
             // create filteredRestaurants by omitting the restaurant from the state that matches the restaurantId
            const filteredRestaurants = _.omitBy(state.restaurants, (value, key) => key == restaurantId);
            console.log(filteredRestaurants);
            const dIds = state.restaurants[restaurantId].dishIds;
            const filteredDishes = dIds.forEach(id => Object.values(state.dishes).map(dish => dish.id != id))
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
            const reviewsNormalized = action.payload.map(dish => dish.reviews.map(review => normalizeReview(review)))
            console.log(reviewsNormalized)
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
           // const match = state.restaurants[resId];
            const filterDishes = _.omitBy(state.dishes, (value, key) => key == dishIdToDelete); //remove the dish from dishes object
            const remainingDishIds = _.without(state.restaurants[resId].dishIds, dishIdToDelete ) //remove the dishId from restaurant.dishIds array
            const updatedRest = Object.assign({}, state.restaurants[resId], {dishIds: remainingDishIds} ) //update the restaurant with new array of dishIds
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[resId]: updatedRest}),
                dishes: Object.assign({},  filterDishes),
                reviews: {}
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
            const reviews = action.payload.map((review) => normalizeReview(review))
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants),
                dishes: Object.assign({},  state.dishes),
                reviews: Object.assign({}, state.reviews, ...reviews)
            }))
            
        default: return state;
    }

    
}