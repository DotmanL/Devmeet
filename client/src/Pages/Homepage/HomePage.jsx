import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import Nav  from '../../components/Navbar/Nav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import { 
 
  Buttons,
  HomePageContainer,
  HomeContent,
  SignUpButton,
  SignInButton,
  Title,
  SubTitle

} from './HomePage.styles'
import { Fragment } from 'react';


const HomePage = ({isAuthenticated}) => {

  if (isAuthenticated){
    return <Redirect to='/dashboard'/>
  }

  return (
    <Fragment>
         <Nav />
    <HomePageContainer>
   
    <HomeContent>
     
    <Title>DEVELOPERS MEET</Title>
    <SubTitle>Create a developer profile/portfolio, share posts and get help from
      other developers </SubTitle>
    <Buttons>  
    <SignUpButton as={Link} to= "/signup">SIGN UP</SignUpButton>
     <SignInButton  as={Link} to= "/signin">  SIGN IN</SignInButton>
     </Buttons>

    </HomeContent>
  
    </HomePageContainer> 
    </Fragment>
  )
}

HomePage.propTypes ={
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
isAuthenticated: state.user.isAuthenticated
})
export default connect(mapStateToProps) (HomePage);
