import styled from 'styled-components';

export const Container =styled.div `
margin: 90px auto;
display: flex;
flex-direction: column;
background: grey;
align-items: center;
justify-content: center;
text-align: center;
width: 60vw;
height: 40vh;

`



export const FormInput = styled.input`
background: white;
  font-size: 15px;
  padding: 5px 10px 10px 5px;
  display: block;
  width: 100%;
  border: 1px solid black;
  border-radius: 3px;
  margin: 2px 0;
`


export const Button = styled.button`
  border: 3px solid black;
  border-radius: 4px;
  width: 162px;
  height: 51px;
  border: 2px solid #fff;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: black;
  color: #fff;
  text-transform: uppercase;
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
`;


export const Title = styled.h2 `
color: white;
font-size: 20px;

`