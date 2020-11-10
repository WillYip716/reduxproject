import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ERRORS } from './types';
import uuid from 'uuid';

const initialState = {
    items: [
        { id: uuid(), name: 'Item 2' },
        { id: uuid(), name: 'Item 3' },
        { id: uuid(), name: 'Item 4' }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            console.log("getting items")
            return {
                ...state,
                items: [...state.items, {id: action.payload._id, name: action.payload.name}]
            }
        case ADD_ITEM:
            return {
                ...state
            }
        case UPDATE_ITEM:
            return {
                ...state
            }
        case DELETE_ITEM:
            return {
                ...state
            }
        case GET_ERRORS:
            console.log("errored");
            return state;
        default:
            console.log("defaulted");
            return state;
    }
}