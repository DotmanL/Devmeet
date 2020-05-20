import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';
import {
  Nav,
  NavHeader,
  NavRight,
  MenuLink,
  NavLeft,
  TitleLink,
  So,
  Sos, 
  MenuLinkD, 
  MenuLinkS,
  Dash,
  DashB
  
  } from './Navbar.styles'


const Navbar = ({ user: { isAuthenticated, loading}, signout}) => {




  const userLinks = (
    <NavRight>

      <MenuLink to ='/profiles'>
    Developers
    </MenuLink> 

    <MenuLink to ='/posts'>
    Posts  |
    </MenuLink>


    <MenuLinkD to ='/dashboard'>
    <DashB title="Dashboard" to='/dashboard'/>
    Dashboard
    </MenuLinkD>

  <Dash title="Dashboard" to='/dashboard'/>


    <MenuLinkS to = "/" onClick={signout}>
     SIGN OUT 
    <So to = "/" title="Sign Out" onClick={signout} /> 
    </MenuLinkS>

    <Sos to = "/" title="Sign Out" onClick={signout} />

    </NavRight>

  )

  const guestLinks =(
    
    <NavRight>
   <MenuLink to ='/profiles'>
    Developers
    </MenuLink> 

    <MenuLink to ='/signup'>
      SignUp
    </MenuLink>

    <MenuLink to ='/signin'>
    SignIn
    </MenuLink>

  

  </NavRight>
  
  );



  return (
  <Nav>
  <NavHeader>
    <NavLeft>
    <TitleLink to= "/">
        Devmeet
        </TitleLink>
      </NavLeft>
    {!loading && (
      <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>
    )}
    
  </NavHeader>
</Nav>
)
}

Navbar.propTypes = {
  signout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { signout }) (Navbar);
