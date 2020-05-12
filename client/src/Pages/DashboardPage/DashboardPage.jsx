import React from 'react';
import NavBar  from '../../components/Navbar/Navbar';
import {
  Container,
  Details,
  Welcome,
  Prof, 
  Proft,
  Buttons
}
from './DashboardPage.styles'


const DashboardPage = () => {
  return (
   
    <Container>
       <NavBar />
 <Details>
    Dashboard
 </Details>
 <Welcome>Welcome Lawal Dotun</Welcome>
 
 <Buttons>
 <Prof>
 <Proft>Edit Profile</Proft>
 </Prof>

 <Prof> 
   <Proft>Add Experience</Proft>
 </Prof>


 <Prof> 
   <Proft>Add Education</Proft>
 </Prof>
 </Buttons>
    </Container>
   )
 }


export default DashboardPage;
