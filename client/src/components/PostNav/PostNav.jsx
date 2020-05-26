import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Nav, Header, Circle } from './PostNav.styles';

const PostNav = ({
  user: {user},
}) => {
  return (
<Nav>
<Circle src={user && user.avatar} />
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
