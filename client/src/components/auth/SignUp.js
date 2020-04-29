import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs2.jpg';


import { SignUpContainer, SignUpTitle, SignUpFooter, LogoContainer } from './SignUp.styles';

const SignUp = () => {

  const [ userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  
  
    const { displayName, email, password, confirmPassword } = userCredentials;
    return (
    
     
      <SignUpContainer>
         <SignUpTitle>SIGN UP</SignUpTitle>
          <form >
          <FormInput
            type='text'
            name='displayName'
            value={displayName} 
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            label='Email'
            required
          />
         <h6>This site uses Gravatar so if you want a profile image, use a
            Gravatar email</h6> 
          <FormInput
            type='password'
            name='password'
            value={password}
            label='Password'
            minLength="6"
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
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



export default SignUp;