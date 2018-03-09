import * as actions from '../actions';

const initialState = {
    restaurants: []
}
export default  (state=initialState, action) => {
    console.log(action);
    switch(action.type) {
        case actions.ADD_RESTAURANT:
         return(Object.assign({}, state, {
             restaurants: [...state.restaurants, action.payload] 
         }));
     
        case actions.FETCH_ALL_RESTAURANTS_SUCCESS: 
            return(Object.assign({}, state, {
                    restaurants: action.payload 
                 }));
        default: return state;
    }

    
}