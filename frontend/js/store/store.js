import MainReducer from '../reducers/MainReducer'
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

export default createStore(
    MainReducer,
    applyMiddleware(thunk)
);