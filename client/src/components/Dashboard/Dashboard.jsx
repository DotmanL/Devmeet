import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../Redux/Profile/profile.actions'
import PropTypes from 'prop-types';

import Spinner from '../Spinner/Spinner';

import {Container,
Details,
Welcome,
Create,
Intro,
Button,
Add,
EditButton

} from './Dashboard.styles';

const Dashboard = ({ 
  getCurrentProfile, 
  user: {user},
  profile:{profile, loading } }) => {
  
  useEffect(() => {
    getCurrentProfile();

  }, [getCurrentProfile])
  
  return loading && profile === null ? <Spinner /> :   
   
   ( 
   
   <Container>
 
 <Details>
    Dashboard
 </Details>
   <Welcome>Welcome {user && user.name}</Welcome>

 {profile !== null ? <Fragment>has</Fragment> : <Create>
   <Intro> You have not setup a profile, please add some info</Intro>
    <Button as="a" href="/create-profile">Create Profile</Button>
 
  </Create>}

 <Add>
  <EditButton as="a" href="/edit-profile">
    Edit Profile
  </EditButton>

  <EditButton as="a" href="/add-experience">
    Add Experience
  </EditButton>

  <EditButton as="a" href="/add-education">
    Add Education
  </EditButton>

 </Add>


  </Container>
 
   )
 }

Dashboard.propTypes ={
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
}


const mapStateToProps = state =>({
  user: state.user,
  profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile} )(Dashboard);
