import React, { Fragment } from "react"
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import {NavItem, DashB, Dash, So, Sos} from './NavLinks.styles';



const NavLinks = ({ user: { isAuthenticated, loading}, signout}) => {
  



  const userLinks = (
    <Fragment>

      <NavItem to ='/profiles'>
    Developers
    </NavItem> 

    <NavItem to ='/posts'>
    Posts 
    </NavItem>


    <NavItem to ='/dashboard'>
    <DashB title="Dashboard" to='/dashboard'/>
    Dashboard  <Dash title="Dashboard"/>
    </NavItem>

  <Link to ='/dashboard'>
 
  </Link>

    <NavItem to = "/" onClick={signout}>
     SIGN OUT   <Sos to = "/" title="Sign Out" onClick={signout} />

    <So to = "/" title="Sign Out" onClick={signout} /> 
    </NavItem>

   
    </Fragment>

  )




  const guestLinks =(
    
    <Fragment>

   <NavItem to ='/profiles'>
    Developers
    </NavItem> 

    <NavItem to ='/signup'>
      SignUp
    </NavItem>

    <NavItem to ='/signin'>
    SignIn
    </NavItem>

  

  </Fragment>
  
  );






  
  return (
   <Fragment>
      {!loading && (
      <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>
    )}
     
   </Fragment>
  )
}



NavLinks.propTypes = {
  signout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  user: state.user
})


export default connect(mapStateToProps, { signout }) (NavLinks);