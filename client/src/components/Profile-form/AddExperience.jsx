import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addExperience} from '../../Redux/Profile/profile.actions';
import NavBar from '../Navbar/Navbar'
//import {Link} from 'react-router-dom';
import {
  Container,
  Title,
  SubTitle,
  FormContainer,
  SubDetails,
  SmallText,
  FormInput,
  FormInputText,
  FormInputC,
  Bcontainer,
  Button,
  Boptional,
  P
} from './AddExperience.styles'

import {BT} from '../Dashboard/Dashboard.styles'






const AddExperience = ({addExperience, history}) => {

  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    description: '',
    from: '',
    to: '',
    current: false,
  })

const [toDateDisabled, toggleDisabled] =useState(false);

const { company, title, location, from, to, current, description } = formData;

const handleChange = event => {
const{name, value} = event.target
setFormData({...formData, [name]: value})

}


const handleSubmit = async event => {
  event.preventDefault();
  setFormData({ company: '',
  title: '',
  location: '',
  description: '',
  from: '',
  to: '',
  current: false,
  })
 addExperience(formData, history)
} 





  return (
    <Fragment>
      <NavBar />
      <Container>
      <FormContainer>
      <Title>Add an Experience</Title>
          <SubTitle>
           <BT />  Add any developer positions that you have had in the past
          </SubTitle>
          <SubDetails>* - required field </SubDetails>
          <form onSubmit={handleSubmit}>
          <FormInput
              type="text"
              placeholder=" * Job Title"
              name="title"
              value={title}
              onChange={handleChange}
              required
           
            />
       
            <FormInput
              type="text"
              placeholder=" *Company"
              name="company"
              value={company}
              onChange={handleChange}
            required
            />
  
            <FormInput
              type="text"
              placeholder=" Location"
              name="location" 
              value={location}
              onChange={handleChange}
            />
      
             

            <FormInput
              type="date"
              name="from"
              value={from}
              onChange={handleChange}
            />
          <SmallText>From Date</SmallText>

         <P> <FormInputC
              type="checkbox"
              name="current"  
              value="current"
              checked ={current}
              onChange={event =>{setFormData({...formData, current: !current})
            toggleDisabled(!toDateDisabled)
            }}
            /> {' '}Current Job </P>
     
          
        <FormInput
              type="date"
              name="to"
              value={to}
              onChange={handleChange}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
              <SmallText>To Date</SmallText>
          
         

            <FormInputText
              placeholder=" Job description"
              name="description"
              cols="30"
              rows="5"
              value={description}
              onChange={handleChange}
             
            />
            <Bcontainer>
              <Button type="submit"> Submit</Button>
              <Boptional to="/dashboard">Go Back</Boptional>
            </Bcontainer>
            </form>






          </FormContainer>
      </Container>



    </Fragment>
  )
};

AddExperience.propTypes = {
addExperience: PropTypes.func.isRequired,
};

export default connect(null, {addExperience}) (AddExperience);
