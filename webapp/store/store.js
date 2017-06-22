import {createStore, combineReducers, applyMiddleware} from 'redux'
import rootReducer from '../reducers/root'
import thunk from 'redux-thunk'

const middlewares = [thunk]

var store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store
