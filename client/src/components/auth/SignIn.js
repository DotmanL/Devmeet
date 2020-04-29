import React, { useState } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs1.jpg';
import { SignInContainer, SignInTitle, SignInFooter, LogoContainer } from './SignIn.styles';

const SignIn = () => {

    const [ userCredentials, setUserCredentials] = useState({
      email: '',
      password: '',
    
    })
  
    const { email, password,} = userCredentials;

    const handleSubmit = async event => {
      event.preventDefault();
      setUserCredentials({ email:"", password:"" });
      console.log('Success')
      
    }

    const handleChange = event =>{
      const {name, value} = event.target
      setUserCredentials({ ...userCredentials, [name]: value });

    }
   
   
    return (  
      <SignInContainer>
         <SignInTitle>SIGN IN</SignInTitle>
          <form onSubmit={handleSubmit} >
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          /> 
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            minLength="6"
            required
          />
      
          <CustomButton type='submit'>SIGN IN</CustomButton>
        </form>
        <LogoContainer src={Logo} alt="sign IN" />
            <SignInFooter to ="/signup">I don't have a account </SignInFooter>  
        </SignInContainer>
  )
}

export default SignIn;