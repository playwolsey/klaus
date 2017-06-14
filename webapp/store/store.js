import {createStore, combineReducers, applyMiddleware} from 'redux'
//import * as reducer from '../reducers/index'
import rootReducer from '../reducers/main'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-thunk'

const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
    middlewares.push(createLogger())
}

var store = createStore(
    //combineReducers(reducer),
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store
