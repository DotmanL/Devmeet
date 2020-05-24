import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {Container, 
  Circle, 
  Title, 
  DetContainer, 
  Status, 
  Edit, 
  Location,
Icons,
Yt,
Twit,
Linked, 
Ig,
Fb, 
Webb} from './ProfileTop.styles';
;

const ProfileTop = ({ profile, user, profile: {
  status,
  company,
  location,
  website,
  social,
  user: {name, avatar}
}}) => {
  return (
    <Fragment>
<Container>
<Circle src={avatar} />
<DetContainer>
  <Title>{name}</Title>
  <Status>{status} at <span>{company}</span></Status>
  <Location>{location}</Location>
  {user.isAuthenticated  && user.loading === false && 
    user.user._id === profile.user._id && (
         <Edit as ='a' href= '/edit-profile'>
         Edit Profile 
       </Edit>)}
  </DetContainer>
  <Icons>
    {website && (
      <a href ={website} target ='_blank' rel="noopener noreferrer">
      <Webb  />
      </a>)}
      
      {social && social.twitter && (
        <a href ={social.twitter} target ='_blank' rel="noopener noreferrer">
        <Twit  />
        </a>)}
        {social && social.linkedin && (
          <a href ={social.linkedin} target ='_blank' rel="noopener noreferrer">
          <Linked  />
          </a>
        )}
          {social && social.instagram && (
          <a href ={social.instagram} target ='_blank' rel="noopener noreferrer">
          <Ig  />
          </a>
        )}
        {social && social.youtube && (
          <a href ={social.youtube} target ='_blank' rel="noopener noreferrer">
          <Yt  />
          </a>
        )}
        {social && social.facebook && (
          <a href ={social.facebook} target ='_blank' rel="noopener noreferrer">
          <Fb  />
          </a>
        )}

  </Icons>
</Container>

    </Fragment>
    
  )
}

ProfileTop.propTypes = {
profile: PropTypes.object.isRequired,
user: PropTypes.object.isRequired,
}


const mapStateToProps = state => ({
  profileU: state.profile,
  user: state.user
})

export default connect(mapStateToProps) (ProfileTop)