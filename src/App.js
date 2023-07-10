import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  BrowserRouter, Routes, Route, Navigate
} from 'react-router-dom';

import Signin from './pages/Signin';
import { checkIsUserLoggedInAction } from './redux/Auth/action';
import { AUTHREDUCER, LOGGEDIN_USER, IS_USER_LOGGEDIN_LOADING } from './redux/Auth/constants';
import Home from './pages/Home';
import MyOrders from './pages/MyOrders';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);
  // console.log("appState=>", appState);
  useEffect(() => {
    dispatch(checkIsUserLoggedInAction());
  }, []); // ! NOTE: if not logged in automatically and stick on the signin page then, set the dependency to state and let the browser tab crash and re-run to on other tab to fix the issue  
  if (appState?.[AUTHREDUCER]?.[IS_USER_LOGGEDIN_LOADING] === true || appState?.[AUTHREDUCER]?.[IS_USER_LOGGEDIN_LOADING] === null) {
    return "Loading";
  }
  if (appState?.[AUTHREDUCER]?.[LOGGEDIN_USER]) {
    return (
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/myorders" element={<MyOrders />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/signin" />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
