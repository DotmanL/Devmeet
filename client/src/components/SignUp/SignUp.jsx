import React, { useState } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import Logo from '../images/ecs2.jpg';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { signup } from '../../Redux/User/user.actions'
import PropTypes from 'prop-types';
import ButtonSpin from '../ButtonSpin/ButtonSpin';

import { SignUpContainer, SignUpTitle, SignUpFooter, LogoContainer } from './SignUp.styles';


const SignUp = ({ signup, user:{loading} }) => {

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
        toast.error("passwords don't match", 'danger');
      } else {
       signup({ name, email, password });

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
            <CustomButton type='submit'> 
      
      {!loading && <span>Sign Up</span>}  
      {loading && <span>Submitting</span>}
      {loading && (<ButtonSpin />)}
      
    
  
        </CustomButton>
          
        
        
        </form>
        <LogoContainer src={Logo} alt="sign up" />
            <SignUpFooter to ="/signin">I am already a member</SignUpFooter>  
      
        </SignUpContainer>

    );
  }

SignUp.propTypes = {
  signup: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user
  })
export default connect(mapStateToProps,
   {signup} )
   (SignUp);