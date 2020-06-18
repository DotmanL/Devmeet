import React from 'react'
import SignUp from '../../components/SignUp/SignUp.jsx';
import { SignUpPageContainer } from './SignUpPage.styles'
import Nav  from '../../components/Navbar/Nav';



const SignUpPage = () => {
  return (
    <SignUpPageContainer>
      <Nav />
     
    <SignUp />
    </SignUpPageContainer>
  )
}

export default SignUpPage