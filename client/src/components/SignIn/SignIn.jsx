import React, { useState } from 'react'
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs1.jpg';
import { SignInContainer, SignInTitle, SignInFooter, LogoContainer, Password } from './SignIn.styles';
import { connect } from 'react-redux';
import { signin } from '../../Redux/User/user.actions';

import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import ButtonSpin from '../ButtonSpin/ButtonSpin';

const SignIn = ({ signin, isAuthenticated, user:{loading}}) => {

    const [ userCredentials, setUserCredentials] = useState({
      email: '',
      password: '',
    
    })
  
    const { email, password,} = userCredentials;

    const handleSubmit = async event => {
      event.preventDefault();
      signin(email, password);  
     
      setUserCredentials({ email:"", password:"" });
      
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
        
    <CustomButton style={{'marginLeft':'30px'}} type='submit'> 
      
    {!loading && <span>Sign In</span>}  
    {loading && <span>Signing In</span>}
    {loading && (<ButtonSpin />)}
    
   


      </CustomButton>
        
          <Password to ='/forgotpassword'>Forgot your Password? </Password>
        
        </form>
        <LogoContainer src={Logo} alt="sign in" />
            <SignInFooter to ="/signup">I don't have an account </SignInFooter>  
        </SignInContainer>
  )
}

SignIn.propType = {
  signin: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
  user: PropTypes.object.isRequired,
  
}

const mapStateToProps = state => ({
isAuthenticated: state.user.isAuthenticated,
user: state.user
})

export default connect( mapStateToProps, { signin, }) (SignIn);