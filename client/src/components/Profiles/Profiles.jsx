import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner';
import {getProfiles} from '../../Redux/Profile/profile.actions';
import ProfileItem from './ProfileItem';
import NavBar from '../Navbar/Navbar';

import {Title, SubTitle, ProfilesL, SA, Container} from './Profiles.styles'


const Profiles = ({getProfiles, profile: { profiles, loading}}) => {
  useEffect(() =>{
    getProfiles();
  
  },[getProfiles])
  
  
  return (
    <Container>
  <Fragment>
      {loading ? <Spinner /> : <Fragment>
        <NavBar />
        <Title>Developers</Title>
        <SubTitle><SA />Browse and Connect with developers</SubTitle>
    </Fragment>}
    <ProfilesL>
      { profiles.length > 0 ? (profiles.map(profile => (<ProfileItem key={profile._id} profile={profile} />))) :( <Spinner />)}
    </ProfilesL>
    </Fragment>
    </Container>
  )
}

Profiles.propTypes = {
getProfiles: PropTypes.func.isRequired,
profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  profile: state.profile
})


export default connect(mapStateToProps, {getProfiles}) (Profiles)
