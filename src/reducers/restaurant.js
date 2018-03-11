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
        case actions.DELETE_RESTAURANT_SUCCESS:
            console.log("Case: Delete restaurant succes ");      
            return(Object.assign({}, {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload.id)}));

        case actions.EDIT_RESTAURANT_SUCCESS:
            console.log("Case: Edit restaurant succes ");
            const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload.id);
            return(Object.assign({}, state, {
                restaurants: [...filteredRestaurants, action.payload] 
            }));

        case actions.FETCH_ALL_DISHES_SUCCESS: 
            console.log("Case: Fetach all dishes succes ");
            console.log(action.payload);
            return Object.assign({}, state, {
                restaurants: action.payload
            } )
     
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