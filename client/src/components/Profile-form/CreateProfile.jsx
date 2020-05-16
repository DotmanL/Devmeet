import React, {Fragment, useState} from 'react'
import { connect } from 'react-redux'
import {createProfile} from  '../../Redux/Profile/profile.actions'; 
import PropTypes from 'prop-types'

import NavBar from '../Navbar/Navbar';
import { Container, 
  Title,
  SubTitle,
  Select, 
  FormContainer,
  SmallText,
  FormInput,
  FormInputText,
  FormInputS,
  Button,
  Sbutton, 
  Soptional,
  Boptional, 
  Twit,
  Fb,
  Yt,
  Li,
  Ig,
  Scontainer,
  Bcontainer

} from './CreateProfile.styles';

const CreateProfile = ({createProfile, history}) => {

  const [displaySocialInputs, toggleSocialInputs] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  })

  
   
  
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData



  
  const handleSubmit = async event => {
    event.preventDefault();
    setFormData({  company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',})
      createProfile(formData, history)

  }



    const handleChange = (event) => {
      const {name, value} = event.target
      setFormData({...formData, [name]: value})
    };



  return (
  <div>
      <NavBar />


      <Container>
<FormContainer>
      <Title>
        Create Your Profile
      </Title>
<SubTitle>
Let's get some information to make your profile stand out
</SubTitle>


<form onSubmit={handleSubmit}>


<Select name="status" value={status} onChange={handleChange} required>
<option> * Select Professional Status </option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
</Select>
<SmallText>Give us an idea of where you are at in your career</SmallText>

<FormInput 
type="text" 
placeholder=" Company" 
name="company"
value={company} onChange={handleChange}
/>
<SmallText>Could be your company or where your work for</SmallText>

<FormInput 
type="text" 
placeholder=" Website" 
name="website"
value={website} onChange={handleChange}
/>
<SmallText>Could be your company or website</SmallText>

<FormInput 
type="text" 
placeholder=" Location" 
name="location"
value={location} onChange={handleChange}
/>
<SmallText>City and State (eg: Lagos, Nigeria) </SmallText>

<FormInput 
type="text" 
placeholder=" * Skills" 
name="skills"
value={skills} onChange={handleChange}
required
/>
<SmallText>Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</SmallText>

<FormInput 
type="text" 
placeholder=" Github Username" 
name="githubusername"
value={githubusername} onChange={handleChange}
/>
<SmallText>If you want your latest repos and a Github link, include your username</SmallText>

<FormInputText 
placeholder=" A short bio of yourself" 
name="bio"
value={bio} onChange={handleChange}
/>
<SmallText>Tell us a little about yourself</SmallText>


<Sbutton onClick={() => toggleSocialInputs(!displaySocialInputs)} type= "button">
  Add Social Network Links
</Sbutton>

<Soptional>
  Optional
</Soptional>

{displaySocialInputs && <Fragment>
  
  <Scontainer>
<Twit/>
<FormInputS 
type=" text" 
placeholder=" Twitter URL" 
name="twitter"
value={twitter} onChange={handleChange}
/>

<Fb/>
<FormInputS 
type=" text" 
placeholder=" Facebook URL" 
name="facebook"
value={facebook} onChange={handleChange}
/>

<Yt/>
<FormInputS 
type=" text" 
placeholder=" YouTube URL" 
name="youtube"
value={youtube} onChange={handleChange}
/>
<Li/>
<FormInputS
type=" text" 
placeholder=" LinkedIn URL" 
name="linkedin"
value={linkedin} onChange={handleChange}
/>
<Ig/>
<FormInputS 
type=" text" 
placeholder=" Instagram URL" 
name="instagram"
value={instagram} onChange={handleChange}
/>
</Scontainer>

  </Fragment>}

<Bcontainer>

  <Button type="submit"> Submit</Button>
<Boptional to = '/dashboard'>Go Back</Boptional>
</Bcontainer>
</form>


</FormContainer>
 </Container>

  </div>
  )
}

CreateProfile.propTypes ={
  createProfile: PropTypes.func.isRequired,
}


export default connect(null, {createProfile}) (CreateProfile)
