import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { activate } from '../../Redux/User/user.actions';
import {setAlert} from '../../Redux/Alert/alert.actions';
import NavBar  from '../../components/Navbar/Navbar';

//import { Link } from 'react-router-dom';
import {
  Container,
  Details,
}
from './ConfirmationPage.styles'


const ConfirmationPage = ({activate, match, setAlert}) => {
  
  useEffect(() => {
    activate(match.params.token);
  }, [activate, match.params.token]);
  




  return (
  
   <Container>
       <NavBar/>
<Details>
Chill, your account is being verified
</Details>
   </Container>
  )
}


ConfirmationPage.propTypes = {
  activate: PropTypes.func.isRequired,
}

export default connect(null, {activate, setAlert,}) (ConfirmationPage)
