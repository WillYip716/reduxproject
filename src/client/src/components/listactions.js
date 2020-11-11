import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, GET_ERRORS } from './types';
import axios from "axios";



export const getItems = () => dispatch => {
  axios
     .get("/api")
     .then(res => {
        console.log("res is " + res.data[0].name);
        dispatch({
           type: GET_ITEMS,
           payload: res.data
        });
     })
     .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
     });
}

export const addItem = data => dispatch => {
   console.log("adding item");
  axios
     .post("/api",data)
     .then(res => {
        dispatch({
           type: ADD_ITEM,
           payload: res.data
        });
     })
     .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
     });
}

export const updateItem = (id,data) => dispatch => {
  axios
     .put("/api/" + id, data)
     .then(res => {
        dispatch({
           type: UPDATE_ITEM,
           payload: res.data
        });
     })
     .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
     });
}

export const deleteItem = id => dispatch => {
  axios
     .delete("/api/"+id)
     .then(res => {
        dispatch({
           type: DELETE_ITEM,
           payload: res.data
        });
     })
     .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
     });
}