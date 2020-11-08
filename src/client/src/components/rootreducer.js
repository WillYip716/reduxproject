import { combineReducers } from 'redux';
import ListReducer from './listreducers';

export default combineReducers({
    list: ListReducer
})


