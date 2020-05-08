import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs2.jpg';
//import axios from 'axios'
import { connect } from 'react-redux';
import { setAlert } from '../../Redux/Alert/alert.actions' ;
import { signup } from '../../Redux/User/user.actions'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';


import { SignUpContainer, SignUpTitle, SignUpFooter, LogoContainer } from './SignUp.styles';

const SignUp = ({ setAlert, signup, isAuthenticated }) => {

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
        setAlert("passwords don't match", 'danger');
      } else {
       signup({ name, email, password });
       setAlert('Registeration Successful, Check your mail box to activate your account', 'success', 60000)

      }
    };

    if(isAuthenticated) {
     return <Redirect to = "/dashboard" />
     } 

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

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
  })

export default connect(mapStateToProps,
   {setAlert, signup} )
   (SignUp);