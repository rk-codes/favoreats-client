import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth';
import restaurantReducer from './restaurant';

 export default combineReducers({
    form: formReducer,
    auth: authReducer,
    restaurant: restaurantReducer
})