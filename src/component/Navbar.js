import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../redux/Auth/action';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/myorders">My Orders</Link>
      <Link onClick={() => dispatch(logoutAction())}>Logout</Link>
      Navbar
    </div>
  )
}

export default Navbar
