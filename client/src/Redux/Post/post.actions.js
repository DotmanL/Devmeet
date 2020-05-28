import {GET_POSTS, POST_ERROR, UPDATE_LIKES, DELETE_POST, ADD_POST} from'./post.types'
import axios from 'axios';

 import { toast } from 'react-toastify';


 export const getPosts = () => async dispatch => {

  try {
    const res = await axios.get('/api/posts')

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  
   } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status }
    })  
  }
 }
//Add like function

 export const addLike = (id) => async dispatch => {

  try {
    const res = await axios.put(`/api/posts/like/${id}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: {id, likes: res.data}
    })
    toast.info('Post liked');
   } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status }
    })  
  }
 }

 //removwe like function

 export const removeLike = (id) => async dispatch => {

  try {
    const res = await axios.put(`/api/posts/unlike/${id}`)

    dispatch({
      type: UPDATE_LIKES,
      payload: {id, likes: res.data}
    })
    toast.info('Post Unliked');
   } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status }
    })  
  }
 }

  //del post

  export const deletePost = (id) => async dispatch => {

    try {
      
      await axios.delete(`/api/posts/${id}`)
  
      dispatch({
        type: DELETE_POST,
        payload: id
      })
      toast.success('Post Removed');
     } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status }
      })  
    }
   }

    //Add post

  export const addPost = (formData) => async dispatch => {

    const config ={
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    try {
      
   const res =  await axios.post('/api/posts', formData, config)
  
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
      toast.success('Post Created');
     } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: {msg: err.response.statusText, status: err.response.status }
      })  
    }
   }