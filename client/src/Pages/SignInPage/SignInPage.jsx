import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import { SignInPageContainer } from './SignInPage.styles';
import NavBar  from '../../components/Navbar/Navbar';

const SignInPage = () => {
  return (
    <SignInPageContainer>
      
      <NavBar />

    <SignIn />
    </SignInPageContainer>
  )
}

export default SignInPage