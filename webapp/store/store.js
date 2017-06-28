import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/root'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middlewares = [thunk]

if (process.env.NODE_ENV === `development`) {
    middlewares.push(createLogger())
}

var store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

export default store
