import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';
import {
  Nav,
  NavHeader,
  //NavCenter,
  //Input,
  NavRight,
  MenuLink,
  NavLeft,
  TitleLink
  //Compass,
  } from './Navbar.styles'


const Navbar = ({ user: { isAuthenticated, loading}, signout}) => {




  const userLinks = (
    <NavRight>
      <MenuLink to ='/developers'>
    Developers
    </MenuLink> 

    <MenuLink to ='/posts'>
    Posts
    </MenuLink>
    
    <MenuLink to = "/" onClick={signout}>
        SIGN OUT 
    </MenuLink>
    </NavRight>

  )

  const guestLinks =(
    
    <NavRight>
      <MenuLink to ='/developers'>
    Developers
    </MenuLink> 

    <MenuLink to ='/posts'>
    Posts
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
