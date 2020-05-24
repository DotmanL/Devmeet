import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Container, Header, BioT, Sheader, Sk, Ski,  } from './ProfileAbout.styles'
import {Ch} from '../Profiles/ProfileItem.styles';

const ProfileAbout = ({profile : {
  bio, 
  skills,
  user: {name}
}}) => {
  return ( 
    <Container>
      {bio && (
        <Fragment>
          <Header>{name.trim().split(' ')[0]}s Bio</Header>
          <BioT> {bio}  </BioT>
        </Fragment>
      )}
  
   
       
      <Sheader>Skill Set</Sheader>
        <Sk>
        
          {skills.map((skill, index) => (
            <Ski key={index}>
               <Ch /> {skill}
            </Ski>
          ))}
        </Sk>
        </Container>
     
  )
}

ProfileAbout.propTypes = {
profile: PropTypes.object.isRequired,
}

export default ProfileAbout
