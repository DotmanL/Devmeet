import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';



const Navbar = ({ user: { isAuthenticated, loading}, signout}) => {

  const userLinks = (
    <ul>
         <li>
        <a onClick={signout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Signout</span>
        </a>
      </li>
  
  </ul>

  )

  const guestLinks =(
    
    <ul>
    <li><Link to="#!">Developers</Link></li>
    <li><Link to="/signup">Sign Up</Link></li>
    <li><Link to="/signin">Sign In</Link></li>
  </ul>
  );

  return (
    <nav className="navbar bg-dark">
    <h1>
      <Link to="/">
        <i className="fas fa-code"></i> DevMeet
        </Link>
    </h1>
    {!loading && (
        <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>
      )}
  </nav>
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
