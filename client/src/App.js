import React, {Fragment} from 'react';

import './App.css';
import { Switch, Route,} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import Alert from "./components/Alert/Alert"


const App = () => (
    <Fragment>
     <Navbar />
      <Alert />
      <Switch>    
    <Route exact path ='/' component={LandingPage}/>
      
   
   <Route exact path ='/signup' component={SignUpPage}/>
   
   <Route exact path ='/signin' component={SignInPage}/>
   
     
  </Switch>
  
    </Fragment>
  );


export default App;
