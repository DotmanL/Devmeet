import { combineReducers } from 'redux';
import userReducer from './User/user.reducer';
import profileReducer from './Profile/profile.reducer';

const rootReducer = combineReducers({
user: userReducer,
profile: profileReducer
 
});

export default rootReducer;
