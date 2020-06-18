import React, { useState, } from 'react';
import { Container, FormInput, Button, Title } from './Reset.styles';
import {reset} from '../../Redux/User/user.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Nav  from '../../components/Navbar/Nav';
import {toast} from 'react-toastify';



const Reset = ({match, reset}) => {

 
const[inputs, setInputs] = useState({
 
  newPassword: '',
  confirmPassword: ''

})

    const { newPassword, confirmPassword} = inputs

  const handleChange = event => {
    const {name, value} = event.target
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = async event => {
    event.preventDefault();
    setInputs({newPassword:'', confirmPassword:''})
    if(newPassword !== confirmPassword){
      toast.error("Passwords don't match")
    } else {
      reset(match.params.token, newPassword)
    }
  }

  return (
    <Container>
      <Nav />
  <Title>Hey, type in your new password </Title>
       
        <form onSubmit={handleSubmit}>
          <FormInput
          name='newPassword'
          type='password'
          value ={newPassword}
          onChange={handleChange}
          placeholder="New Password"
          minLength="6"
          required
          />

        <FormInput
          name='confirmPassword'
          type='password'
          value ={confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter New Password"
          minLength="6"
          required
          />
        <Button type ='submit'> Submit </Button>
        </form>
    </Container>
  )
}

 Reset.propType ={
  reset: PropTypes.func.isRequired,
}

export default connect (null, {reset}) (Reset);
