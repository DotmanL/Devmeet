import React from 'react'
import {Link} from 'react-router-dom';
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
      <Link to='/'>
      <HomeLink>Home</HomeLink>
      </Link>
      <Link to={`/profile/${user && user._id}`}> 
        <ProfMenu >My Profile</ProfMenu>
        </Link>
        <Link to='/dashboard'>
      <DashMenu>Dashboard</DashMenu>
      </Link>
      <Link to='/profiles'>
      <DevMenu>Developers</DevMenu>
      </Link>

      
          <Link to='/'>
        <SoMenu onClick={signout} >Sign Out</SoMenu>
        </Link>
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
