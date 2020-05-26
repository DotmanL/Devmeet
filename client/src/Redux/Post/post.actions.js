import {GET_POSTS, POST_ERROR} from'./post.types'
import axios from 'axios';

 import { toast } from 'react-toastify';


 export const getPosts = () => async dispatch => {

  try {
    const res = await axios.get('/api/posts')

    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
    toast.success('Posts Loaded');
   } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status }
    })  
  }
 }