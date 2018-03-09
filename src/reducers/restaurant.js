import * as actions from '../actions';

const initialState = {
    restaurants: [{
        id: '1',
        name: 'ABC',
        location: 'San Francisco',
        cuisine: 'Italian',
        dishCount: '1',
        dishes: [{
            dishId: '1',
            name: 'Xyz',
            rating: '3'
        }]
    },
    {
        id: '2',
        name: 'BCD',
        location: 'Las Vegas',
        cuisine: 'Mexican',
        dishCount: '1',
        dishes: [{
            dishId: '2',
            name: 'Bcd',
            rating: '5'
        }]
    }]
}
export default  (state=initialState, action) => {
    if(action.type === actions.ADD_RESTAURANT) {
        console.log("Add restaurant reducer");
        //update state
        return(Object.assign({}, state, {
            restaurants: [...state.restaurants, action.restaurant] 
        }));
    }
    return state;
}