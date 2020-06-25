import {
  GET_POSTS,
  GET_MORE_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  ADD_POST_START,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './post.types'

const initialState = {
  posts: [],
  post: null,
  loading: true,
  posting: false,
  error: {},
}

const postReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      }
case GET_MORE_POSTS:
  return{
    ...state,
    posts: payload,
    loading: false
  }

    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      }
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }

      case ADD_POST_START:
        return{
          ...state,
          posting: true,
        }
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
        posting: false,
      }
    case UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      }
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      }

    default:
      return state
  }
}

export default postReducer
