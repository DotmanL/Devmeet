import React from 'react';
import NavBar  from '../../components/Navbar/Navbar';
import {
  Container,
  Details,
  Welcome,
  Prof, 
  Proft,
  Buttons, 
  PageContainer
}
from './DashboardPage.styles'

import Particles from '../../components/Particles/Particles';


const DashboardPage = () => {
  return (
   
    <PageContainer>  
        <Particles />   
       <NavBar />
     
       <Container>
 
 <Details>
    Dashboard
 </Details>
 <Welcome>Welcome Lawal Dotun</Welcome>
 
 <Buttons>
 <Prof>
 <Proft>Edit Profile</Proft>
 </Prof>

 <Prof> 
   <Proft to='/'>Add Experience</Proft>
 </Prof>
 <Prof> 
   <Proft>Add Education</Proft>
 </Prof>
 </Buttons>
    
  </Container>
    </PageContainer>
 
   )
 }


export default DashboardPage;
