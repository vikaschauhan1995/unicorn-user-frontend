import { CHECK_IS_USER_LOGGEDIN, SIGNIN_ACTION, LOGOUT_ACTION } from "./constants";



export function signInAction(provider) {
  return {
    type: SIGNIN_ACTION,
    payload: provider
  }
}

export function checkIsUserLoggedInAction() {
  return {
    type: CHECK_IS_USER_LOGGEDIN
  }
}

export function logoutAction() {
  return {
    type: LOGOUT_ACTION
  }
}