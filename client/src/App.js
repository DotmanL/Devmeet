import React, {Fragment} from 'react';

import './App.css';
import { Switch, Route,} from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import SignInPage from './Pages/SignInPage/SignInPage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';



const App = () => (
    <Fragment>
     <Navbar />
      <Switch>    
    <Route exact path ='/' component={LandingPage}/>
      
   <Route exact path ='/signup' component={SignUpPage}/>
   <section className = 'container'>
    
    <Route exact path ='/signin' component={SignInPage}/>
    </section>
 
  </Switch>
  
    </Fragment>
  );


export default App;
