import styled from 'styled-components';

export const Container =styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding-bottom: 10px;
border-bottom: 1px solid gray;

border: 10px;
margin-top: -45px;
margin-left: 4px;

@media screen and (max-width: 800px) {
  margin-top: -50px;
  }
`


export const CoverL =styled.div`
width: 100px;
height: 60px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const Line =styled.div`
width: 2px;
height: 500px;
margin-left: 34px;
background: gray;
`


export const FormContainer =styled.div`
background: black;
width: 100%;
padding-left: 10px;
display: flex;
flex-direction: row;
margin-top: 0px;
`





export const CircleC = styled.img`
background: gray;
border-radius: 50%;
width: 50px;
height: 50px;
display: flex;
margin-top: -10px;
`


export const FormInput =styled.textarea`
width: 90%;
background: black;
border: none;
overflow: auto;
    outline: none;
    resize: none;
padding-top: 10px;
color: white;
margin-left: 20px;
padding-left: 0px;
font-size: 15px;
height:200px;

@media screen and (max-width: 800px) {
    height: 100px;
  }
`

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  width: 140px;
  margin-left: 10px;
  margin-top: 150px;
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
    background: grey;
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

