import React, { Fragment } from 'react'
import SignIn from '../../components/SignIn/SignIn';
import { SignInPageContainer } from './SignInPage.styles';
import Nav  from '../../components/Navbar/Nav';

const SignInPage = () => {
  return (
    <Fragment>
      <Nav />
    <SignInPageContainer>
      
      

    <SignIn />
    </SignInPageContainer>
    </Fragment>
  )
}

export default SignInPage