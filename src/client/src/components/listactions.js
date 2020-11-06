import { GET_ITEMS, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from './types';
import axios from "axios";

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage// Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};



export const getItems = () => dispatch => {
  axios
     .get("/")
     .then(res => {
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
  axios
     .post("/",data)
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
     .put("/${id}", data)
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
     .delete("/${id}")
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