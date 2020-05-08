import React, {Fragment, useEffect} from 'react';

import './App.css';
import { Switch, Route,} from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import ConfirmationPage from './Pages/Confirmation Page/Confirmation Page'
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import PostsPage from './Pages/Posts/Posts';
import Alert from "./components/Alert/Alert"
import { loadUser } from './Redux/User/user.actions'
import setAuthToken from './utils/setAuthToken';
import store from './Redux/store';

import { ToastContainer } from 'react-toastify';
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
     <ToastContainer/>
      <Alert />
      <Switch>    
    <Route exact path ='/' component={HomePage}/>
   <Route exact path ='/signup' component={SignUpPage}/>
   
   <Route exact path ='/signin' component={SignInPage}/>
   <Route exact path ='/verifyaccount/:token' component={ConfirmationPage}/>
   
   <Route exact path ='/dashboard' component={DashboardPage}/>
   <Route exact path ='/posts' component={PostsPage}/>
     
  </Switch>
  
    </Fragment>
  )};


export default App;
