import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-left: 20px;
  margin-bottom: 0px;
  margin-top: 20px;
  
  @media screen and (max-width: 800px) {
  width: 65vw;
  }
`;

export const LogoContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 350px;
  margin-top: -370px;
  margin-left: 420px;
  

  @media screen and (max-width: 800px) {
  flex-direction: column;
  margin-left: -10px;
  margin-top: 30px;
  width: 90vw;
  height: 200px;
  display: none;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  font-size: 30px;
  @media screen and (max-width: 800px) {
  flex-direction: column;
  margin-left: 25%;
  color: black;

  }
`;

export const SignInFooter = styled(Link)`
  width: 200px;
  margin-left: 550px;
  margin-top: 0px;
  color: black;

  
  @media screen and (max-width: 800px) {
  margin-left: 15%;
  margin-top: -5px;
  }
`;


export const Password = styled(Link)`
  font-size: 15px;
  margin-left: 10px;
  color: black;
    
  @media screen and (max-width: 800px) {
    margin-left: 15%;
  margin-top: 15px;
  }
`