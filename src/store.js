import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {loadAuthToken} from './local-storage';
import reducers from './reducers';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    reducers,
    applyMiddleware(thunk, logger)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;