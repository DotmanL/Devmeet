import styled from 'styled-components';

export const Container =styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding-bottom: 10px;
border-bottom: 1px solid white;
`

export const Cover =styled.div`
background: black;
border-bottom: 1px solid white;
width: 100%;
color: white;
`

export const Header =styled.h2`
font-size: 20px;
color: white;
margin-left: 10px;
`

export const FormContainer =styled.div`
background: black;
width: 100%;
`

export const FormInput =styled.textarea`
width: 100%;
background: lightgray;
border: 2px solid white;
padding-top: 10px;
padding-left: 10px;
height:200px;
border: 8px;
@media screen and (max-width: 800px) {
    height: 100px;
  }
`

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  width: 140px;
  margin-left: 10px;
  margin-top: 0px;
  height: 51px;
  border: 2px solid #fff;
  cursor: pointer;
  background: black;
  color: #fff;
  font-family: "Montserrat-SemiBold";
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; 
 
  & i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(5, 91, 94);
    border-radius: 10px;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:hover {
    border-color: transparent; }
    &:hover:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1); }
    &:hover i {
      -webkit-transform: translateX(4px);
      transform: translateX(4px); }
      
      @media screen and (max-width: 800px) {
        width: 90px;
        height: 30px;
        margin-left: 0px;
      }
`