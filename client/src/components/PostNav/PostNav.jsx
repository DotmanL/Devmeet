import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
//import ResponsiveMenu from 'react-responsive-navbar';
import { Nav, Header, Circle } from './PostNav.styles'
//import {Link} from 'react-router-dom'
//import {HomeLink} from '../DevUsers/DevUsers.styles';
const PostNav = ({
  user: {user},
}) => {

  
  return (
<Nav>

<Circle src={user && user.avatar} > 
{/* <Link to='/'>
      <HomeLink>Home</HomeLink>
      </Link> */}

</Circle>

<Header> Home </Header>

    </Nav>
  )
}

PostNav.propTypes ={
  user: PropTypes.object.isRequired,
  
}


const mapStateToProps = state =>({
  user: state.user,

})
export default connect(mapStateToProps)(PostNav)


