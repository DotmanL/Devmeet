import styled from 'styled-components';
import {Gallery} from '@styled-icons/remix-fill/Gallery'

export const Gal = styled(Gallery)`
width: 40px;
height: 40px;
color: white;
cursor: pointer;
margin-left: -140px;
`

export const Container =styled.div`
width: 100%;
display: flex;
position: relative;
flex-direction: column;
padding-bottom: 10px;
background-color: rgb(0, 0, 0);
border-bottom: 1px solid gray;
`

export const Cover =styled.div`
 
border-bottom: 1px solid gray;
width: 100%;
color: rgb(211,211,211);
`

export const Header =styled.h2`
font-size: 20px;
color: rgb(211,211,211);
margin-left: 10px;
`
export const PostingB =styled.h5`
font-size: 20px;
color: rgb(211,211,211);
margin-left: 20px;
`

export const FormContainer =styled.div`
width: 100%;
`

export const FormInput =styled.textarea`
width: 100%;
background-color: rgb(0, 0, 0);
color: rgb(211,211,211);
border: 2px solid rgb(211,211,211);
border-bottom: 20px solid gray;
padding-top: 10px;
padding-left: 20px;
font-size: 15px;
position: relative;
height:100px;
resize: none;
outline: none;
border: 8px;
@media screen and (max-width: 800px) {
    height: 100px;
  }
`
export const PostPrev = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 150px;

`


export const PostB = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 20px;
  margin-top: -60px;

`

export const Button = styled.button`
  border-radius: 10px;
  width: 100px;
  margin-left: 10px;
  margin-top: 0px;
  height: 41px;
  border: 1px solid #fff;
  cursor: pointer;
  text-align: center;
  background: black;
  border-radius: 10px;
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
    background:#03045e;
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
        margin-left: 10px;
      }
`

export const ButtonDimed =styled(Button)`
opacity: 0.4;

  &:before {
    background: black;  
  }
`