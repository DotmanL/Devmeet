import React from 'react'
import SignIn from '../../components/auth/SignIn'
import { SignInPageContainer } from './SignInPage.styles';

const SignInPage = () => {
  return (
    <SignInPageContainer>
    <SignIn />
    </SignInPageContainer>
  )
}

export default SignInPage