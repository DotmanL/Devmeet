import React, {Fragment, useEffect} from 'react';

import './App.css';
import { Switch, Route,} from 'react-router-dom';
import HomePage from './Pages/Homepage/HomePage';
import Navbar from './components/Navbar/Navbar';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import ConfirmationPage from './Pages/Confirmation Page/Confirmation Page'
import Alert from "./components/Alert/Alert"
import { loadUser } from './Redux/User/user.actions'
import setAuthToken from './utils/setAuthToken';
import store from './Redux/store';


// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }


const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, [])
  
  return (
    <Fragment>
     <Navbar />
      <Alert />
      <Switch>    
    <Route exact path ='/' component={HomePage}/>
      
   
   <Route exact path ='/signup' component={SignUpPage}/>
   
   <Route exact path ='/signin' component={SignInPage}/>
   <Route exact path ='/verifyaccount' component={ConfirmationPage}/>
   
     
  </Switch>
  
    </Fragment>
  )};


export default App;
