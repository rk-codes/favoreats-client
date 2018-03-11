import * as actions from '../actions';

const initialState = {
    restaurants: [{
        dishes: []
    }]
}
export default  (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case actions.ADD_RESTAURANT_SUCCESS:
            console.log("Case: Add restaurant succes ");
            return(Object.assign({}, state, {
                restaurants: [...state.restaurants, action.payload] 
            }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            console.log("Case: Fetch all restaurants succes ");
            return(Object.assign({}, state, {
                restaurants: action.payload 
            }));
        case actions.FETCH_ALL_DISHES_SUCCESS: 
            console.log("Case: Fetach all dishes succes ");
            let restaurant = state.restaurants[0];
            console.log(restaurant);
            return state;
                //return Object.assign({}, restaurant,{dishes: action.payload})
            
            // return(Object.assign({}, state,  { 
            //         dishes: action.payload
            //      })
               
            // );
        case actions.DELETE_RESTAURANT_SUCCESS:
            console.log("Case: Delete restaurant succes ");
            const updatedRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload.id);
            return(Object.assign({}, {restaurants: updatedRestaurants}));
        case actions.EDIT_RESTAURANT_SUCCESS:
            console.log("Case: Edit restaurant succes ");
        case actions.ADD_DISH_SUCCESS:
        console.log("Case: Add dish succes ");
        case actions.DELETE_DISH_SUCCESS:
            console.log("Case: Delete dish succes ");
        case actions.EDIT_DISH_SUCCESS:
            console.log("Case: Edit dish succes ");
        case actions.ADD_DISH_REVIEW_SUCCESS:
            console.log("Case: Add dish review succes ");
        case actions.FETCH_ALL_REVIEWS_SUCCESS:
            console.log("Case: Fetch all dish reviews succes ");
        default: return state;
    }

    
}