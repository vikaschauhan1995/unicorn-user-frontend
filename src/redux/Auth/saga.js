
import { takeLatest, put } from 'redux-saga/effects';
import { CHECK_IS_USER_LOGGEDIN, FACEBOOK_SIGNIN, GOOGLE_SIGNIN, LOGOUT_ACTION, SET_IS_USER_LOGGEDIN_LOADING, SET_LOGGEDIN_USER, SIGNIN_ACTION } from './constants';
import { facebookSignIn, googleSignIn } from './methods/signin';
import { checkIsUserLoggedIn } from './methods/checkIsUserLoggedIn.js';
import { logout } from './methods/logout';

function* checkIsUserLoggedInAction() {
  try {
    yield put({ type: SET_IS_USER_LOGGEDIN_LOADING, payload: true });
    const loggedInUser = yield checkIsUserLoggedIn();
    // * set user if the user is logged in
    yield put({ type: SET_LOGGEDIN_USER, payload: loggedInUser });
    yield put({ type: SET_IS_USER_LOGGEDIN_LOADING, payload: false });
  } catch (error) {
    // * if got error while checking if the user is logged in or not
    yield put({ type: SET_LOGGEDIN_USER, payload: null });
    yield put({ type: SET_IS_USER_LOGGEDIN_LOADING, payload: false });
    console.log("error: ", error.message);
  }
}

function* signin(params) {
  try {
    // console.log("prams=>", params);
    let isLoggedIn = false;
    if (params?.payload === GOOGLE_SIGNIN) {
      isLoggedIn = yield googleSignIn();
    } else if (params?.payload === FACEBOOK_SIGNIN) {
      isLoggedIn = yield facebookSignIn();
    }
    if (isLoggedIn) {
      yield put({ type: SET_LOGGEDIN_USER, payload: isLoggedIn?.user });
    }
    // * check if the user is already logged in before
    // const isEmailAvailable = yield checkIfEmailAlreadySignedIn(isLoggedIn?.user[EMAIL__KEY__]);
  } catch (error) {
    console.log("error: ", error.message);
  }
}

function* logoutAction() {
  try {
    /** * @logout return @true if success otherwise @false */
    const isSignOut = yield logout();
    // ! If @logout success set IS_USER_LOGGEDIN set to false otherwise true */
    yield put({ type: SET_LOGGEDIN_USER, payload: isSignOut && false });
  } catch (error) {
    console.log("error: ", error.message);
  }
}

export default function* saga() {
  yield takeLatest(SIGNIN_ACTION, signin);
  yield takeLatest(CHECK_IS_USER_LOGGEDIN, checkIsUserLoggedInAction);
  yield takeLatest(LOGOUT_ACTION, logoutAction)
}