import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {SignOut} from '@styled-icons/octicons/SignOut'

 import {Profile} from '@styled-icons/remix-fill/Profile'


export const So =styled(SignOut)`
color: white;
width: 30px;
height: 30px;
margin-left: 10px;
cursor: pointer;
@media screen and ( max-width: 800px) {
      width: 20px;
      height: 20px;
      display: none
  }
`

export const Sos =styled(SignOut)`
color: white;
width: 30px;
height: 30px;
margin-left: 10px;
cursor: pointer;
display:none;
@media screen and ( max-width: 800px) {
      width: 25px;
      height: 25px;
      display: inline-block;
      margin-left: 5px;
      margin-top: 3px;
  }
`

export const Dash =styled(Profile)`
color: white;
width: 30px;
height: 30px;
margin-left: 30px;
cursor: pointer;
display: none;
@media screen and ( max-width: 800px) {
      width: 25px;
      height: 25px;
      display: inline-block;
      margin-left: -5px;
  }
`

export const DashB =styled(Profile)`
color: white;
width: 30px;
height: 30px;
margin-left: -5px;
cursor: pointer;

@media screen and ( max-width: 800px) {
     
      display: none;
  }
`


export const Nav = styled.div`
  background-color: rgba(5, 91, 94, 0.5);
  height: 8vh;
  width: 100%;
  border-bottom: 2px solid white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  
  @media screen and ( max-width: 800px) {
      width: 100%;
      height: 9vh;
      background: black;
  }
`;
 
export const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  color: white;
  font-size: 10px;
  margin-top: -30px;
  margin-left: 40px;
  @media screen and ( max-width: 800px) {
      margin-left: 65%;
      font-size: 20px;
      margin-top: -50px;
  }
`;
 
export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
 
 
export const NavRight = styled.div`
   width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 15px;
    margin-right: -10px;
    margin-top: -20px;
  
    @media screen and ( max-width: 800px) {
      margin-top: -4px;
      margin-left: -85%;
      justify-content: space-around;
      width: 80%;
      
  }
    
`;

export const MenuLink = styled(Link)`
 color: white;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: none;
  
  padding: 10px 20px;
  cursor: pointer;
  @media screen and ( max-width: 800px) {
      font-size: 20px;
      padding: 5px 6px;
  }
`;


export const MenuLinkS =styled(MenuLink)`
@media screen and ( max-width: 800px) {
      display: none;
  }
`

export const MenuLinkD =styled(MenuLink)`
@media screen and ( max-width: 800px) {
      display: none;
  }
`

export const TitleLink = styled(Link)`
 color: white;
  font-size: 30px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: none;
  margin-left: -40px;
  cursor: pointer;
  margin-top: 20px;
  @media screen and ( max-width: 800px) {
      font-size: 20px;
      padding: 5px 6px;
      margin-left: -100px;
  }
`;