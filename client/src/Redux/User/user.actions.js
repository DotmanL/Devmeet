import axios from 'axios';

import { setAlert } from "../Alert/alert.actions";
import { toast } from 'react-toastify';
//import {browserHistory} from '../../history'



import { 
  SIGN_UP_SUCCESS, 
  SIGN_UP_FAIL, 
  USER_LOADED, AUTH_ERROR, 
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAIL,
  SIGN_OUT,
  ACTIVATION_FAILURE,
  ACTIVATION_SUCCESS, 
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD,
  RESET_PASSWORD_FAILURE
} 
  from './user.types';

//Load users

export const loadUser = () => async dispatch => {


try {
  const res = await axios.get ('/api/auth');

  dispatch ({ 
    type: USER_LOADED,
    payload: res.data
   })
} catch (err) {
  console.log(err)
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
    toast.success("Registration Successful, Check your mail for activation details", { autoClose: 8000,});
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
    toast.success("Sign in Successful", { autoClose: 5000,});
    dispatch(loadUser());
    
    
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
   
    dispatch({
      type: SIGN_IN_FAIL
    })
    toast.error("Sign in Failure", { autoClose: 8000,});
  };
};

//SIGN OUT
export const signout = () => dispatch => {
  dispatch({ type: SIGN_OUT})
} 


//Activate account

export const activate = (token) => async dispatch => {
  
  const config ={
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body =JSON.stringify({token});

  try {
    const res = await axios.post(`/api/users/verifyaccount/${token}`, body,  config);
    
    dispatch({
      type: ACTIVATION_SUCCESS,
      payload: res.data
    })
    //browserHistory.push('/signin')
    //dispatch(loadUser());
    toast.success('Activation Successful, Kindly Sign In with your details',{ autoClose: 8000,})
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: ACTIVATION_FAILURE
    })
    toast.error('Invalid Token or Expired Token, Kindly Sign Up Again',{ autoClose: 10000,})
   
  };
};





//Forgot Password

export const forgot = (email) => async dispatch => {
  
  const config ={
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body =JSON.stringify({email});

  try {
    const res = await axios.put(`/api/users/forgotpassword`, body,  config);
    
    dispatch({
      type: FORGOT_PASSWORD,
      payload: res.data
    })
    toast.success('Check your mail for reset link',{ autoClose: 8000,})
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) => console.log(errors));
    }
    dispatch({
      type: FORGOT_PASSWORD_FAILURE
    })
    toast.error('User does not exist ',{ autoClose: 10000,})
   
  };
};



//Reset Password


export const reset = (resetPasswordLink, newPassword) => async dispatch => {
  
  const config ={
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const body =JSON.stringify({resetPasswordLink, newPassword});

  try {
    const res = await axios.put(`/api/users/resetpassword/:token`, body,  config);
    
    dispatch({
      type:RESET_PASSWORD,
      payload: res.data
    })
    toast.success('Password succesfully changed, Sign in with new password',{ autoClose: 8000,})
  } catch (err) {
    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) => console.log(errors));
    }
    dispatch({
      type: RESET_PASSWORD_FAILURE
    })
    toast.error('Password reset link expired ',{ autoClose: 10000,})
   
  };
};
