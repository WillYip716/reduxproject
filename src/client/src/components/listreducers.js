import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ERRORS } from './types';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_ITEMS:
            console.log("getting items");
            return {
                ...state,
                items: [...state.items,  ...action.payload]
            }
        case ADD_ITEM:
            console.log("adding item");
            return {
                ...state,
                items: [...state.items,  action.payload]
            }
        case UPDATE_ITEM:
            console.log("updating item");
            return {
                items:[...action.payload]
            }
        case DELETE_ITEM:
            console.log("deleting item");
            return {
                items:[...action.payload]
            }
        case GET_ERRORS:
            console.log("errored");
            return state;
        default:
            console.log("defaulted");
            return state;
    }
}