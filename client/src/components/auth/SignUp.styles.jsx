import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-left: 40px;
  margin-bottom: 70px;
  margin-top: -10px;
`;

export const LogoContainer = styled.img`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin-left: 400px;
  margin-top: -500px;

  @media screen and (max-width: 800px) {
  flex-direction: column;
  margin-left: -10px;
  margin-top: 30px
  }
`;

export const SignUpTitle = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  font-size: 30px;
  @media screen and (max-width: 800px) {
  flex-direction: column;
  margin-left: 25%;

  }
`;

export const SignUpFooter = styled(Link)`
  width: 200px;
  margin-left: 500px;
  margin-top: 0px;

  
  @media screen and (max-width: 800px) {
  margin-left: 0px;
  margin-top: 10px;
  }
`;

