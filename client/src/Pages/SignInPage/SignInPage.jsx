import React from 'react'
import SignIn from '../../components/SignIn/SignIn';
import { SignInPageContainer } from './SignInPage.styles';
import Nav  from '../../components/Navbar/Nav';

const SignInPage = () => {
  return (
    <SignInPageContainer>
      
      <Nav />

    <SignIn />
    </SignInPageContainer>
  )
}

export default SignInPage