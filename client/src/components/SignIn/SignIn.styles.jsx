import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 20px;
  margin-bottom: 0px;
  margin-top: 20px;
`;

export const LogoContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 350px;
  margin-top: -320px;
  margin-left: 400px;
  

  @media screen and (max-width: 800px) {
  flex-direction: column;
  margin-left: -5px;
  margin-top: 30px;
  width: 300px;
  height: 200px;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  font-size: 30px;
  @media screen and (max-width: 800px) {
  flex-direction: column;
  margin-left: 25%;

  }
`;

export const SignInFooter = styled(Link)`
  width: 200px;
  margin-left: 500px;
  margin-top: 0px;

  
  @media screen and (max-width: 800px) {
  margin-left: 0px;
  margin-top: 10px;
  }
`;

