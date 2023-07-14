import { combineReducers } from 'redux';
import { reducer as authReducer } from './Auth/reducer';
import { reducer as homeReducer } from './Home/reducer';
import { AUTHREDUCER } from './Auth/constants';
import { HOME_REDUCER } from './Home/constants';



export default combineReducers({
  [AUTHREDUCER]: authReducer,
  [HOME_REDUCER]: homeReducer
});