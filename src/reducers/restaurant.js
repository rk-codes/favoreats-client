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
            return(Object.assign({}, state, {
                restaurants: [...state.restaurants, action.payload] 
            }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            return(Object.assign({}, state, {
                restaurants: action.payload 
            }));
        case actions.FETCH_ALL_DISHES_SUCCESS: 
                let restaurant = state.restaurants[0];
                console.log(restaurant);
                //return Object.assign({}, restaurant,{dishes: action.payload})
            
            // return(Object.assign({}, state,  { 
            //         dishes: action.payload
            //      })
               
            // );
        case actions.DELETE_RESTAURANT_SUCCESS:
        case actions.EDIT_RESTAURANT_SUCCESS:
        case actions: FETCH_ALL_DISHES_SUCCESS;
        case actions.ADD_DISH_SUCCESS:
        case actions.DELETE_DISH_SUCCESS:
        case actions.EDIT_DISH_SUCCESS:
        case actions.ADD_DISH_REVIEW_SUCCESS:
        case actions.FETCH_ALL_REVIEWS_SUCCESS:
        default: return state;
    }

    
}