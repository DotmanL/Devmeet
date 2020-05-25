import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import profileReducer from './Profile/profile.reducer';
import postReducer from './Post/post.reducer';

const rootReducer = combineReducers({
user: userReducer,
profile: profileReducer,
post: postReducer 
});

export default rootReducer;
