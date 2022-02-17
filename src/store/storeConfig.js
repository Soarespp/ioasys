
import { createStore, combineReducers, applyMiddleware } from 'redux';
import AuthReducer from './reducers/auth/AuthReducer';
import promise from 'redux-promise'

const reducers = combineReducers({
    auth: AuthReducer
})

function storeConfig() {
    return applyMiddleware(promise)(createStore)(reducers)
}

export default storeConfig