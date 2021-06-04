import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ResponsiveMenu from 'react-responsive-navbar'
import { Link } from 'react-router-dom'
import { signout } from '../../Redux/User/user.actions'

import {
  Nav,
  Header,
  Circle,
  NavM,
  Dl,
  Hm,
  Db,
  Dv,
  Pp,
  So,
  Hd,
  CircleC,
} from './PostNav.styles'
const PostNav = ({ user: { user }, signout }) => {
  return (
    <Nav>
      <ResponsiveMenu
        menuOpenButton={<Circle src={user && user.avatar} />}
        menuCloseButton={<Dl />}
        changeMenuOn="500px"
        menu={
          <NavM>
            <Hd>Account Links</Hd>
            <Link to={`/profile/${user && user._id}`}>
              <CircleC src={user && user.avatar} />
            </Link>
            <Link to="/">
              <h3>
                {' '}
                Home <Hm />
              </h3>
            </Link>

            <Link to={`/profile/${user && user._id}`}>
              <h3>
                {' '}
                My Profile <Pp />
              </h3>
            </Link>

            <Link to="/dashboard">
              <h3>
                {' '}
                Dashboard <Db />{' '}
              </h3>
            </Link>

            <Link to="/profiles">
              <h3>
                {' '}
                Developers <Dv />
              </h3>
            </Link>

            <Link to="/">
              <h3 onClick={signout}>
                {' '}
                Sign out <So />
              </h3>
            </Link>
          </NavM>
        }
      />

      <Header> Home </Header>
    </Nav>
  )
}

PostNav.propTypes = {
  user: PropTypes.object.isRequired,
  signout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  user: state.user,
})
export default connect(mapStateToProps, { signout })(PostNav)
