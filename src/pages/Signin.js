import { useSelector } from 'react-redux';
import '../style/Signin.scss';
import React from 'react';


const Signin = () => {
  const authReducerState = useSelector(state => state);
  // console.log("authReducerState=>", authReducerState);
  return (
    <div>
      Signin
    </div>
  )
}

export default Signin
