import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import activeUsers from './reducer-active-user';
const allReducers=combineReducers({
  userss:UserReducer,
activeUsers:activeUsers
})

export default allReducers;
