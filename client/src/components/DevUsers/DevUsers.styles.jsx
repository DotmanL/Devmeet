import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled.div`
  background: black;
  
  width: 200px; 
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

  
  @media screen and (max-width: 800px) {
    display: none;
  
  }
  `;

export const MenuC =styled.div`
width: 85%;
margin-left: 15px;
margin-top: 20px;
position: fixed;

@media screen and (max-width: 800px) {
}

`

  export const DashMenu =styled.button`
    border: 3px solid black;
  border-radius: 10px;
  width: 140px;
  margin-left: 10px;
  margin-top: 40px;
  height: 51px;
  border: 2px solid #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
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
        @media screen and (max-width: 1024px) {
       display: none;  

}
`

export const DevMenu = styled(DashMenu)`
`

export const ProfMenu = styled(DashMenu)`
`
export const SoMenu = styled(DashMenu)`
`
export const Header =styled(DashMenu)`

` 