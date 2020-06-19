import styled from "styled-components"
import { Link } from 'react-router-dom';
import {SignOut} from '@styled-icons/octicons/SignOut'
import {Profile} from '@styled-icons/remix-fill/Profile'


export const NavItem = styled(Link)`
text-decoration: none;
display: inline-block;
color: white;
white-space: nowrap;
font-weight: 700;
font-size: 20px;
margin: 0 1vw;
font-family: 'Vollkorn', serif;
padding-top: 3vh;
transition: all 200ms ease-in;
cursor: pointer;
position: relative;
:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0%;
  content: ".";
  color: transparent;
  background: #14213d;
  height: 1px;
  transition: all 0.4s ease-in;
}
:hover {
  color: #14213d;
  ::after {
    width: 100%;
  }
}
@media (max-width: 800px) {
  padding: 20px 0;
  font-size: 20px;
  z-index: 6;
color: #14213d;
}
`



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