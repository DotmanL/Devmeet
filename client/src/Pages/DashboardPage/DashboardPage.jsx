import React from 'react';
import NavBar  from '../../components/Navbar/Navbar';
import Dashboard from '../../components/Dashboard/Dashboard';

import {
  PageContainer
}
from './DashboardPage.styles'


//import Particle from '../../components/Particles/Particles';


const DashboardPage = () => {

  return (
   
    <PageContainer> 
      <NavBar /> 
     <Dashboard /> 
     
    </PageContainer>
 
   )
 }

export default DashboardPage;
