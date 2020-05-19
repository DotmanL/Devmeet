import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import { getCurrentProfile } from '../../Redux/Profile/profile.actions'
import PropTypes from 'prop-types';
import Experience from './Experience'
import Education from './Education'
import Spinner from '../Spinner/Spinner';
import {deleteAccount} from '../../Redux/Profile/profile.actions'

import {Container,
Details,
Welcome,
Create,
Intro,
Button,
Add,
EditButton,
DeleteButton,
Prof,
BT,
GD
} from './Dashboard.styles';

const Dashboard = ({ 
  getCurrentProfile, 
  user: {user},
  profile:{profile, loading },
deleteAccount }) => {
  
  useEffect(() => {
    getCurrentProfile();

  }, [getCurrentProfile])
  
  return loading && profile === null ? <Spinner /> :   
   
   ( 
   
   <Container>
 
 <Details>
    Dashboard
 </Details>
   <Welcome><Prof/> Welcome  {user && user.name}</Welcome>

 {profile !== null ? <Fragment>


  <Add>
    
  <EditButton as="a" href="/edit-profile">
  <Prof />
    Edit Profile
  </EditButton>

  <EditButton as="a" href="/add-experience">
    <BT />
    Add Experience
  </EditButton>

  <EditButton as="a" href="/add-education">
    <GD />
    Add Education
  </EditButton>

 </Add>
 <Experience experience={profile.experience} />

 <Education education={profile.education} />

 <DeleteButton onClick={() => deleteAccount()}>Delete My Account</DeleteButton>
 
 
 </Fragment> : <Create>
   <Intro> You have not setup a profile, please add some info</Intro>
    <Button as="a" href="/create-profile">Create Profile</Button>
 
  </Create>}



  </Container>
 
   )
 }

Dashboard.propTypes ={
  getCurrentProfile: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
}


const mapStateToProps = state =>({
  user: state.user,
  profile: state.profile
})

export default connect(mapStateToProps, {getCurrentProfile, deleteAccount} )(Dashboard);
