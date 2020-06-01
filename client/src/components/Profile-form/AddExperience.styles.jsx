import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
border-radius: 10px;
border: 3px solid white;
background: black;
width: 95vw;
margin-top: 10vh;
margin-right: auto;
margin-left: auto;
padding-bottom: 50px;
@media screen and (max-width: 800px) {
  
}
`


export const Title = styled.h1`
font-size: 30px;
color: white;
margin-left: 40px;
`

export const SubTitle = styled.h3`
font-size: 20px;
margin-top: 10px;
color: white;
margin-left: 40px;
`

export const SubDetails = styled.h6`
font-size: 20px;
margin-top: 10px;
color: white;
margin-left: 40px;
`
export const FormContainer = styled.div`
margin-top: 50px;
background: black;
width: 85vw;
margin-left: 20px;
justify-content: space-between;
@media screen and (max-width: 800px) {
 width: 85vw;
}
;
`

export const FormInput =styled.input`
width: 70%;
height: 35px;
background: white;
margin-left: 30px;
border-radius: 5px;
margin-top: 15px;
border: 1px solid black;


@media screen and (max-width: 800px) {
 width: 80%;
}
`

export const FormInputText =styled.textarea`
width: 70%;
height: 75px;
background: white;
margin-left: 30px;
border-radius: 5px;
margin-top: 10px;
border: 1px solid black;


@media screen and (max-width: 800px) {
 width: 80%;
 height: 45px;
}
`


export const SmallText =styled.h6`
  font-size: 15px;
  margin-left: 34px;
  margin-top: 0px;
  color: white;
  `

export const P =styled.p`
  color: white;
  display: flex;
  flex-direction: row;
  
  `


export const FormInputC =styled.input`
width: 20px;
height: 35px;
background: white;
color: white;
margin-left: 35px;
margin-top: -5px;
border-radius: 5px;

border: 1px solid black;
@media screen and (max-width: 800px) {

}
`



export const Bcontainer =styled.div `
display: flex;
justify-content: flex-start;
width: 70%;


@media screen and (max-width: 800px) {
   width: 345px;
   margin-left: -12px;
   margin-top: 20px;
   display: flex;
   flex-direction: row;
   flex-flow: column wrap;

}
`
export const Button = styled.button`
  border: 3px solid black;
  border-radius: 4px;
  width: 130px;
  height: 51px;
  border: 2px solid #fff;
  margin-left: 40px;
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



export const Boptional =styled(Link)`
color: white;
margin-left: 30px;
margin-top: 20px;
font-size: 20px;

@media screen and (max-width: 800px) {
  margin-left: 220px;
margin-top: -40px;
font-size: 20px
}


`