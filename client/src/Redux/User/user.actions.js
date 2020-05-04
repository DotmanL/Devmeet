import axios from 'axios';

import { setAlert } from "../Alert/alert.actions";
import setAuthToken from '../../utils/setAuthToken'

import { 
  SIGN_UP_SUCCESS, 
  SIGN_UP_FAIL, 
  USER_LOADED, AUTH_ERROR, 
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAIL,
  SIGN_OUT
} 
  from './user.types';

//Load users

export const loadUser = () => async dispatch => {


  if (localStorage.token){
  setAuthToken(localStorage.token);
}

try {
  const res = await axios.get ('/api/auth');
  dispatch ({ 
    type: USER_LOADED,
    payload: res.data
   })
} catch (err) {
  dispatch({
    type: AUTH_ERROR
  })
}
}



//Signup users 

export const signup = ({name, email, password}) => async dispatch => {

  const config ={
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body =JSON.stringify({name, email, password});

  try {
    const res = await axios.post("/api/users", body, config);
    
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
   
    dispatch({
      type: SIGN_UP_FAIL
    })
  }
;}




//SignIn users 

export const signin = ( email, password) => async dispatch => {

  const config ={
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body =JSON.stringify({email, password});

  try {
    const res = await axios.post("/api/auth", body, config);
    
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    dispatch(setAlert("Sign In Successful", "success"))
    
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
   
    dispatch({
      type: SIGN_IN_FAIL
    })
  };
};

//SIGN OUT
export const signout = () => dispatch => {
  dispatch({ type: SIGN_OUT})
} 