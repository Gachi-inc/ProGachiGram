import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReduser from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const store = createStore(
    rootReduser, 
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);

export default store;