import { combineReducers } from 'redux'
import AxiosDemoReducer from './AxiosDemoReducer'
import AddReducer from './AddReducer'
import MsgReducer from './MsgReducer'

export default combineReducers({
    AxiosDemoReducer,
    AddReducer,
    MsgReducer,
})