import React from 'react'
import {connect} from 'react-redux';

import PropTypes from 'prop-types'
import { signout } from '../../Redux/User/user.actions';
import {Container, HomeLink, MenuC, DashMenu, DevMenu, ProfMenu, SoMenu} from './DevUsers.styles';

const DevUsers = ({ 
  user:{user},
  signout
}) => {
  return (
    <Container>
      <MenuC>
      <HomeLink as='a' href="/">Home</HomeLink>
    
     
        <ProfMenu as="a" href={`/profile/${user && user._id}`} >My Profile</ProfMenu>
      
       
      <DashMenu as='a' href="/dashboard">Dashboard</DashMenu>
    
   
      <DevMenu as='a' href="/profiles">Developers</DevMenu>
        
        <SoMenu as='a' href="/" onClick={signout} >Sign Out</SoMenu>
    
      </MenuC>

      </Container>
  )
}


DevUsers.propTypes = {
 user: PropTypes.object.isRequired,
 signout: PropTypes.func.isRequired,
  }

const mapStateToProps = state => ({
  user: state.user,

})

export default connect(mapStateToProps, { signout })(DevUsers)
