import axios from 'axios';

import { toast } from 'react-toastify';

import {
  GET_PROFILE,
  PROFILE_ERROR
}
from './profile.types';


//Get current users profile

export const getCurrentProfile = () => async dispatch => {

  try {
    const res = await axios.get('/api/profile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status }
    })
    
  }

}

//Create or Update Profile

export const createProfile = (formData, history, edit=false) => async dispatch =>{
  try {
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('/api/profile', formData, config)

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
    toast.success(edit ? 'Profile Updated' : 'Profile Created')

    if(!edit) {
      history.push('/dashboard');
    }
  } catch (err) {

    const errors = err.response.data.errors;
    
    if (errors) {
      errors.forEach((error) =>(toast.error('Invalid Credentials', error.msg)));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status }
    })
  }
}