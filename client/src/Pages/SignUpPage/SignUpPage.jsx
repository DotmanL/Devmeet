import React from 'react'
import SignUp from '../../components/SignUp/SignUp.jsx';
import { SignUpPageContainer } from './SignUpPage.styles'
import NavBar  from '../../components/Navbar/Navbar';



const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <NavBar />
     
    <SignUp />
    </SignUpPageContainer>
  )
}

export default SignUpPage