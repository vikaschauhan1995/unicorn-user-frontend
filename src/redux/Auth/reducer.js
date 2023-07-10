import {
  LOGGEDIN_USER,
  SET_LOGGEDIN_USER,
  SET_IS_USER_LOGGEDIN_LOADING,
  IS_USER_LOGGEDIN_LOADING
} from "./constants";


const initialState = {
  [LOGGEDIN_USER]: null,
  [IS_USER_LOGGEDIN_LOADING]: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return { ...state, [LOGGEDIN_USER]: action?.payload };
    case SET_IS_USER_LOGGEDIN_LOADING:
      return { ...state, [IS_USER_LOGGEDIN_LOADING]: action?.payload };
    default:
      return state;
  }
}