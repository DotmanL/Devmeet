import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  DevContainer,
  Circle, 
  Name,
  Status, 
  Location,
  List,
  PButton,
  Ch,
  ListL
} from './ProfileItem.styles';

const ProfileItem = ({profile: {
  user: {_id, name, avatar},
  status, 
  company, 
  location,
  skills
}
}) => {
  return (
      <Container>
         <Circle src ={avatar} alt="" />
    
      <DevContainer>
     
      <Name>
        {name}
      </Name>
  <Status> {status} {company &&<span> at {company}</span>}</Status>
  <Location>
    {location && <span>{location}</span> }  </Location>
    <PButton as ='a' href= {`/profile/${_id}`} > 
   View Profile
   </PButton>
      <List>
      <ListL>
      {skills.slice(0, 4).map((skill, index) => (
        <li key ={index}>
            <Ch />{skill}
        </li>
      ))}
      </ListL>
      </List>
    
      </DevContainer>
    </Container>
  )
}

ProfileItem.propTypes = {
profile: PropTypes.object.isRequired,
}

export default ProfileItem
