import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner'
import {getProfileById} from '../../Redux/Profile/profile.actions';
import NavBar from '../Navbar/Navbar';
import {Link} from 'react-router-dom'
import {Goback, Edit} from './Profile.styles';

const Profile = ({ match, getProfileById, profile:{profile, loading}, user }) => {
useEffect(() =>{
  getProfileById(match.params.id)
}, [getProfileById, match.params.id])


  return (
 <Fragment>
   <NavBar />
   {profile === null || loading ? ( <Spinner/> 
   ) : ( 
   <Fragment>
    <Goback  as ='a' href= '/profiles'>
      Back to Profiles 
    </Goback>
    {user.isAuthenticated  && user.loading === false && 
    user.user._id === profile.user._id && (
         <Edit as ='a' href= '/edit-profile'>
         Edit Profile 
       </Edit>)}
     </Fragment>
          
      )}</Fragment>


  )
}

Profile.propTypes = {
getProfileById: PropTypes.func.isRequired,
profile: PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  profile: state.profile,
  user: state.user
})
export default connect(mapStateToProps, {getProfileById}) (Profile)
