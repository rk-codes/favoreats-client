import * as actions from '../actions';

const initialState = {
    restaurants: [{
        id: '1',
        name: 'ABC',
        location: 'San Francisco',
        cuisine: 'American',
        dishCount: '3' 
    },
    {
        id: '2',
        name: 'BCD',
        location: 'Las Vegas',
        cuisine: 'Mexican',
        dishCount: '1' 
    }]
}
export const restaurantReducer = (state=initialState, action) => {
    if(action.type === actions.ADD_RESTAURANT) {
        console.log("Add restaurant reducer");
        //update state
    }
    return state;
}