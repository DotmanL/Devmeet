import React, {Fragment, useEffect,} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../Spinner/Spinner'
import {getProfileById} from '../../Redux/Profile/profile.actions';
import Nav from '../Navbar/Nav';

import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';



import {Goback, ProfileContainer, 
  PexpHeader, ProfileExpContainer, 
  PeduHeader, ProfileduContainer,
   Nec, SubContainer } from './Profile.styles';


const Profile = ({ match, getProfileById, profile:{profile, loading}, user }) => {
useEffect(() =>{
  getProfileById(match.params.id)
}, [getProfileById, match.params.id])


  return (
 <Fragment>
   <Nav />
   {profile === null || loading ? ( <Spinner/> 
   ) : ( 
        <ProfileContainer>
            <Fragment>
      <Goback  as ='a' href= '/profiles'>
      Back to Profiles 
    </Goback>
    
    </Fragment>
          <ProfileTop profile = {profile}/>
          <ProfileAbout profile = {profile}/>
          
          <SubContainer>
          <ProfileExpContainer>
          <PexpHeader>
            Experience
          </PexpHeader>
          {profile.experience.length > 0 ?(<Fragment>
            {profile.experience.map(experience => (
              <ProfileExperience key ={experience._id} experience ={experience} />
            ))}
          </Fragment>) : (<Nec>No Experirence Credentials </Nec>)}
          </ProfileExpContainer>
              
        <ProfileduContainer>
          <PeduHeader>
            Education
          </PeduHeader>
          {profile.education.length > 0 ?(<Fragment>
            {profile.education.map(education => (
              <ProfileEducation key ={education._id} education ={education} />
            ))}
          </Fragment>) : (<Nec>No Education Credentials </Nec>)}
          </ProfileduContainer>
          </SubContainer>
               {profile.githubusername &&(<ProfileGithub username={profile.githubusername} />)} 

        </ProfileContainer>


          
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
