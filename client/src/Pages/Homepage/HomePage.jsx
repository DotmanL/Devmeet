import React from 'react'
import { Link } from 'react-router-dom';

import { 
 
  Buttons,
  
  HomePageContainer,
  HomeContent,
  SignUpButton,
  SignInButton,
  Title,
  SubTitle

} from './HomePage.styles'


const HomePage = () => {
  return (
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
  )
}

export default HomePage;
