import { useSelector, useDispatch } from 'react-redux';
import '../style/Signin.scss';
import React from 'react';
import { FACEBOOK_SIGNIN, GOOGLE_SIGNIN } from '../redux/Auth/constants';
import { signInAction } from '../redux/Auth/action';


const Signin = () => {
  const dispatch = useDispatch();
  const authReducerState = useSelector(state => state);
  // console.log("authReducerState=>", authReducerState);
  const googleSignInClick = () => {
    dispatch(signInAction(GOOGLE_SIGNIN));
  }
  const facebookSignInClick = () => {
    dispatch(signInAction(FACEBOOK_SIGNIN));
  }
  return (
    <div className="SignIn__container">
      <div className="GoogleSignIn__inner_container" onClick={googleSignInClick}>
        <div className='SignIn__googleIconContainer'>
          <img src="https://www.google.com/favicon.ico" alt="google icon" />
        </div>
        <div className='SignIn__googleButtonText'>
          <div>
            Sign in with Google
          </div>
        </div>
      </div>
      <div className="FacebookSigin__inner_container" onClick={facebookSignInClick}>
        <div className='SignIn__facebookIconContainer'>
          <i className="gg-facebook"></i>
        </div>
        <div className='SignIn__googleButtonText'>
          <div>
            Sign in with Facebook
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
