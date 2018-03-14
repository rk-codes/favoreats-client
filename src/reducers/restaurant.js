import * as actions from '../actions';
import {union} from 'lodash';
import {normalizeRestaurant, normalizeDish} from '../utils/normalizer';

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
    console.log(action);
    switch(action.type) {
        case actions.ADD_RESTAURANT_SUCCESS:
            console.log("Case: Add restaurant succes ");
            //console.log(state);
            const normalizedData = normalizeRestaurant(action.payload);
            return(Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, normalizedData.restaurants),
                dishes: {},
                reviews: {} 
            }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            console.log("Case: Fetch all restaurants succes ");
            //console.log(state);
            let normalizedArray = [];
            let normalizedDishes = [];
            action.payload.forEach(restaurant => {
                normalizedArray.push(normalizeRestaurant(restaurant)); //normalize each restaurant in the api response and add them to a new array 
                restaurant.dishes.forEach(dish => normalizedDishes.push(normalizeDish(dish))) //change to map
            })
           // console.log(normalizedArray)
            let restaurants = normalizedArray.map(item => item.restaurants) //get the values of 'restaurants' key  
            
           // console.log(normalizedDishes)
             return(Object.assign({}, state, {
                 restaurants: Object.assign({}, state.restaurants, ...restaurants),
                 dishes: Object.assign({}, state.dishes, ...normalizedDishes),
                 reviews: {}
             }))
            
        case actions.DELETE_RESTAURANT_SUCCESS:
            console.log("Case: Delete restaurant succes ");
            const restaurantId = action.payload.id;
            //Get the keys of all state.restaurants
            const keys = Object.keys(state.restaurants);
            //Find the key that matches the restaurantId
            let filteredRestaurants = [];
            keys.forEach(key => {
                if(key != restaurantId) {
                    filteredRestaurants.push((state.restaurants[key])) //push the restaurants that don't match to an array
                }
            })
            //console.log(filteredRestaurants);

            // remove all dish Ids from state.dishes for the deleted restaurant

            return(Object.assign({}, state, {
                restaurants:  Object.assign({}, filteredRestaurants) 
            }));

        case actions.EDIT_RESTAURANT_SUCCESS:
            console.log("Case: Edit restaurant succes ");
            return(Object.assign({}, state, {
                restaurants: [...action.payload] 
            }));

        case actions.FETCH_ALL_DISHES_SUCCESS: 
            console.log("Case: Fetach all dishes succes ");
           // console.log(action.payload);
             const restId = action.payload[0].restId;
             const cachedRestaurant = state.restaurants[restId]// find the matching restaurant in the state
             const restaurant = Object.assign({}, cachedRestaurant, {dishIds: union(cachedRestaurant.dishIds, action.payload.map(dish => dish.id))})
             console.log(cachedRestaurant.dishIds, action.payload.map(dish => dish.id));
        //     console.log(state.restaurants[restaurant])
        //    // console.log(normalizeRestaurant(state.restaurants[match]))
           // let normalizedDishesData = [];
            const dishes = action.payload.map((dish) => normalizeDish(dish)) //normalize each dish in the api response and add to a new array

            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants, {[restId]: restaurant}),
                dishes: Object.assign({},  state.dishes, ...dishes),
                reviews: {}
            }))
     
        case actions.ADD_DISH_SUCCESS:
            console.log("Case: Add dish succes ");
            const normalizedDish = normalizeDish(action.payload); // normalize the dish in the api response
            const matchRestaurantKey = Object.keys(state.restaurants).find(key => key == action.payload.restId) //find the matching restaurant in the state
            state.restaurants[matchRestaurantKey].dishIds.push(action.payload.id) // add the new dish id to the dishIds array
            return (Object.assign({}, state, {
                restaurants: Object.assign({}, state.restaurants),
                dishes: Object.assign({},  state.dishes, normalizedDish),
                reviews: {}
            }))

        case actions.DELETE_DISH_SUCCESS:
            console.log("Case: Delete dish succes ");
            return state;

        case actions.EDIT_DISH_SUCCESS:
            console.log("Case: Edit dish succes ");
            return state;

        case actions.ADD_DISH_REVIEW_SUCCESS:
            console.log("Case: Add dish review succes ");
            return state;

        case actions.FETCH_ALL_REVIEWS_SUCCESS:
            console.log("Case: Fetch all dish reviews succes ");
            return state;
            
        default: return state;
    }

    
}