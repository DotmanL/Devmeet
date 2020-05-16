import { combineReducers } from 'redux';
import alertReducer from './Alert/alert.reducer'
import userReducer from './User/user.reducer';
import profileReducer from './Profile/profile.reducer';

const rootReducer = combineReducers({
alert: alertReducer,
user: userReducer,
profile: profileReducer
 
});

export default rootReducer;
