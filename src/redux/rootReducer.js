import { combineReducers } from 'redux';
import { reducer as authReducer } from './Auth/reducer';
import { AUTHREDUCER } from './Auth/constants';



export default combineReducers({
  [AUTHREDUCER]: authReducer,
});