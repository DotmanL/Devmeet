import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs2.jpg';
//import axios from 'axios'
import { connect } from 'react-redux';
import { setAlert } from '../../Redux/Alert/alert.actions' ;

import PropTypes from 'prop-types';


import { SignUpContainer, SignUpTitle, SignUpFooter, LogoContainer } from './SignUp.styles';

const SignUp = ({ setAlert }) => {

  const [ userCredentials, setUserCredentials] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  
  
    const { name, email, password, confirmPassword } = userCredentials;
    
    const handleSubmit = async event => {
      event.preventDefault();
      setUserCredentials({ name: '', email: '', password: '', confirmPassword: ''})
  
      if (password !== confirmPassword) {
        setAlert("passwords don't match", "danger");
      } else {
        setAlert('password match', "success")
      }
    };

      const handleChange = event => {
        const { name, value } = event.target;
    
        setUserCredentials({ ...userCredentials, [name]: value });
      };



      return (
      <SignUpContainer>
         <SignUpTitle>SIGN UP</SignUpTitle>
          <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='name'
            value={name} 
            onChange ={handleChange}
            label='Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange ={handleChange}
            label='Email'
            required
          />
         <h6>This site uses Gravatar so if you want a profile image, use a
            Gravatar email</h6> 
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange ={handleChange}
            label='Password'
            minLength="6"
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange ={handleChange}
            label='Confirm Password'
            minLength="6"
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
        <LogoContainer src={Logo} alt="sign up" />
            <SignUpFooter to ="/signin">I am already a member</SignUpFooter>  
        </SignUpContainer>

    );
  }

SignUp.protoTypes = {
  setAlert: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setAlert: (msg, alertType) => dispatch(setAlert({msg, alertType}))
})

export default connect(null, mapDispatchToProps)(SignUp);