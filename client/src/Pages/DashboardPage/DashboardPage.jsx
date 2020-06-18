import React from 'react';
import Nav  from '../../components/Navbar/Nav';
import Dashboard from '../../components/Dashboard/Dashboard';

import {
  PageContainer
}
from './DashboardPage.styles'


//import Particle from '../../components/Particles/Particles';


const DashboardPage = () => {

  return (
   
    <PageContainer> 
      <Nav/> 
     <Dashboard /> 
     
    </PageContainer>
 
   )
 }

export default DashboardPage;
