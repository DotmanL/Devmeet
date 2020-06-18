import styled from 'styled-components';
import {Twitter} from "@styled-icons/entypo-social/Twitter"
import {FacebookSquare} from "@styled-icons/boxicons-logos/FacebookSquare"
import {Youtube} from "@styled-icons/boxicons-logos/Youtube";
import {LinkedinSquare} from "@styled-icons/boxicons-logos/LinkedinSquare";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import { Link } from 'react-router-dom';

export const Container = styled.div`
border-radius: 10px;
border: 3px solid white;
background: black;
width: 85vw;
margin-top: 10vh;
margin-right: auto;
margin-left: auto;
padding-bottom: 50px;

@media screen and (max-width: 800px) {
  width: 90vw;
  margin-top: 1vh;
}
`
export const Title = styled.h1`
font-size: 30px;
color: white;
margin-left: 40px;
margin-top: -120px;
`

export const SubTitle = styled.h3`
font-size: 20px;
margin-top: 10px;
color: white;
margin-left: 40px;
`


export const FormContainer = styled.div`
margin-top: 150px;
background: black;

width: 80vw;
margin-left: 20px;
justify-content: space-between;
@media screen and (max-width: 800px) {
  width: 75vw;
}
;
`

export const Select = styled.select`
  width: 50vw;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-top: 10px;
  margin-left: 30px;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
  @media screen and (max-width: 800px) {
 
}
  `

  export const SmallText =styled.h6`
  font-size: 10px;
  margin-left: 34px;
  color: white;
  margin-top: -2px;
  `

  export const FormInput =styled.input`
  width: 50vw;
  height: 35px;
  background: white;
  margin-left: 30px;
  border-radius: 5px;
  margin-top: 15px;
  border: 1px solid black;
  outline: none;
  @media screen and (max-width: 800px) {
    width: 70vw;
}
  `

export const FormInputText =styled.textarea`
width: 50vw;
height: 60px;
background: white;
margin-left: 30px;
border-radius: 5px;
margin-top: 15px;
border: 1px solid black;
resize: none;
outline: none;
@media screen and (max-width: 800px) {
  width: 70vw;
}
`

export const FormInputS =styled.input`
  width: 130px;
  height: 35px;
  background: white;
  margin-left: 10px;
  border-radius: 5px;
  margin-top: 25px;
  border: 1px solid black;
  @media screen and (max-width: 800px) {
    width: 70vw;
}
  `

export const Sbutton = styled.button`
margin-left: 40px;
border-radius: 3px;
cursor: pointer;
margin-top: 30px;
height: 30px;
width: 15vw;
text-align: center;
background: white;
font-size: 12px;
@media screen and (max-width: 800px) {
width: 40vw;
margin-left: 10px;
}
`
export const Soptional =styled.h4`
color: white;
font-size: 20px;
margin-left: 260px;
margin-top: -30px;

@media screen and (max-width: 800px) {
  margin-left: 175px;
}
`



export const Twit =styled(Twitter)`
color: lightskyblue;
width: 50px;
margin-left: 20px;
@media screen and (max-width: 800px) {
   
  
}
`
export const Fb =styled(FacebookSquare)`
color: darkblue;
width: 50px;
margin-left: 20px;
`
export const Scontainer =styled.div `
display: flex;
justify-content: flex-start;

@media screen and (max-width: 800px) {
  
   margin-left: -12px;
   margin-top: 20px;
   display: flex;
   flex-direction: row;
   flex-flow: column wrap;
}
`
export const Yt =styled(Youtube)`
color: red;
width: 50px;
height: 70px;
margin-left: 20px;
`
export const Li =styled(LinkedinSquare)`
color: cyan;
width: 50px;
height: 70px;
margin-left: 20px;
`

export const Ig =styled(Instagram)`
color: white;
width: 50px;
height: 70px;
margin-left: 20px;
`

export const Bcontainer =styled.div `
display: flex;
justify-content: flex-start;

width: 60vw;
@media screen and (max-width: 800px) {
  width: 80vw;
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
      
      @media screen and (max-width: 800px) {
        width: 50vw;

}
`;



export const Boptional =styled(Link)`
color: white;
margin-left: 30px;
margin-top: 20px;
font-size: 20px;

@media screen and (max-width: 800px) {
width: 30px;
text-align: center;
}
`