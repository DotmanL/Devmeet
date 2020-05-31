import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { signout } from '../../Redux/User/user.actions'
import {
  Container,
  HomeLink,
  Hm,
  MenuC,
  DashMenu,
  Db,
  DevMenu,
  Dv,
  ProfMenu,
  Us,
  SoMenu,
  So
} from './DevUsers.styles'

const DevUsers = ({ user: { user }, signout }) => {
  return (
    <Container>
      <MenuC>
        <HomeLink as="a" href="/">
          Home
        </HomeLink>
         <Link to='/'>
        <Hm/>
        </Link>

        <ProfMenu as="a" href={`/profile/${user && user._id}`}>
          My Profile
        </ProfMenu>
        <Link to={`/profile/${user && user._id}`}>
        <Us/>
        </Link>

        <DashMenu as="a" href="/dashboard">
          Dashboard
        </DashMenu>
        <Link to='/dashboard'>
        <Db/>
        </Link>

        <DevMenu as="a" href="/profiles">
          Developers
        </DevMenu>
        <Link to='/profiles'>
        <Dv/>
        </Link>

        <SoMenu as="a" href="/" onClick={signout}>
          Sign Out
        </SoMenu>
        <Link to='/'  onClick={signout} >
        <So/>
        </Link>

      </MenuC>
    </Container>
  )
}

DevUsers.propTypes = {
  user: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps, { signout })(DevUsers)
