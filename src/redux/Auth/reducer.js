import { LOGGEDIN_USER, SET_LOGGEDIN_USER } from "./constants";


const initialState = {
  [LOGGEDIN_USER]: null
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGEDIN_USER:
      return { ...state, [LOGGEDIN_USER]: action?.payload };
    default:
      return state;
  }
}