import React, {useState} from 'react'
import { Container, FormInput, Button, Title } from './Forgot.styles'
import NavBar  from '../../components/Navbar/Navbar';
import {connect} from 'react-redux'
import { forgot } from '../../Redux/User/user.actions'
import PropTypes from 'prop-types'



const Forgot = ({forgot}) => {


  const [ inputs, setInputs] = useState({
    email: '',
  })

  const { email } = inputs

  const handleSubmit = async event => {
    event.preventDefault();
    setInputs({ email:"", });
    forgot(email) 
  }
  


  const handleChange = event =>{
    const {name, value} = event.target
    setInputs({ ...inputs, [name]: value });
    
  };

  return (
    <Container>
      <NavBar />
      <Title>Forgot your password, type in your email to reset your password</Title>
      <form onSubmit={handleSubmit}>
         
         <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            placeholder="Type in your email address"
            required
          /> 

          <Button type='submit'> Submit</Button>

      </form>


    </Container>
  )
}

Forgot.propTypes = {
  forgot: PropTypes.func.isRequired,
}



export default connect(null, {forgot}) (Forgot);