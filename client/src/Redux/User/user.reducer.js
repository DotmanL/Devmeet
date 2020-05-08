import {
   SIGN_UP_SUCCESS, 
   SIGN_UP_FAIL,
    USER_LOADED, 
    AUTH_ERROR,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAILURE
  } from './user.types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
 }

 
const userReducer = (state = initialState, action) => {

  const { type, payload } = action;


switch (type) {
case SIGN_UP_SUCCESS: 
return {
  ...state,
  ...payload,
  isAuthenticated: false,
  loading: false,
  user: null
}

case SIGN_IN_SUCCESS:
case ACTIVATION_SUCCESS: 
  //localStorage.setItem('token', payload.token)
  return {
    ...state,
    ...payload,
    isAuthenticated: true,
    loading: false
  }
  

  case SIGN_UP_FAIL:
  case AUTH_ERROR:
  case SIGN_IN_FAIL:
  case SIGN_OUT:
  case ACTIVATION_FAILURE:  
     //localStorage.removeItem('token')
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null,
    }
  case USER_LOADED:
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: payload
    }
  
default:
  return state;
}
}

export default userReducer;