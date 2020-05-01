import React, { useState } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs1.jpg';
import { SignInContainer, SignInTitle, SignInFooter, LogoContainer } from './SignIn.styles';
import { connect } from 'react-redux';
import { signin } from '../../Redux/User/user.actions';

import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

const SignIn = ({ signin, isAuthenticated}) => {

    const [ userCredentials, setUserCredentials] = useState({
      email: '',
      password: '',
    
    })
  
    const { email, password,} = userCredentials;

    const handleSubmit = async event => {
      event.preventDefault();
      setUserCredentials({ email:"", password:"" });
      signin(email, password);
      
      
    }

    const handleChange = event =>{
      const {name, value} = event.target
      setUserCredentials({ ...userCredentials, [name]: value });

    };

    //redirect when signed in

if(isAuthenticated) {
  return <Redirect to = "/dashboard" />

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

SignIn.propType = {
  signin: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
}

const mapStateToProps = state => ({
isAuthenticated: state.user.isAuthenticated
})

export default connect( mapStateToProps, { signin, }) (SignIn);