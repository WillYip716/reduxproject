import { combineReducers } from 'redux';
import ListReducer from './components/listreducer';

export default combineReducers({
    list: ListReducer
})