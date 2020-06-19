import React, { Fragment } from 'react'
import SignUp from '../../components/SignUp/SignUp.jsx';
import { SignUpPageContainer } from './SignUpPage.styles'
import Nav  from '../../components/Navbar/Nav';



const SignUpPage = () => {
  return (
    <Fragment>
        <Nav />
    <SignUpPageContainer>
    
     
    <SignUp />
    </SignUpPageContainer>
    </Fragment>
  )
}

export default SignUpPage