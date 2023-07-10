import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Signin from './pages/Signin';
import { useEffect } from 'react';
import { checkIsUserLoggedInAction } from './redux/Auth/action';

function App() {
  const dispatch = useDispatch();
  const appState = useSelector(state => state);
  console.log("appState=>", appState);
  useEffect(() => {
    dispatch(checkIsUserLoggedInAction());
  }, []); // ! NOTE: if not logged in automatically and stick on the signin page then, set the dependency to state and let the browser tab crash and re-run to on other tab to fix the issue  
  return (
    <div className="App">
      <Signin />
    </div>
  );
}

export default App;
