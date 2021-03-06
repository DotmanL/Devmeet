import styled from 'styled-components'
import { Home } from '@styled-icons/entypo/Home'
import { Profile } from '@styled-icons/remix-fill/Profile'
import { User } from '@styled-icons/boxicons-solid/User'
import { DeveloperMode } from '@styled-icons/material/DeveloperMode'
import { SignOut } from '@styled-icons/octicons/SignOut'

export const Container = styled.div`
  background: black;
  border-right: 1px solid gray;
  width: 15vw;
  overflow-x: hidden;
  height: auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

  @media screen and (max-width: 500px) {
    display: none;
  }
  @media screen and (min-width: 500px) and (max-width: 1000px) {
    width: 9.5vw;
    display: none;
    background: black;
    flex-direction: column;
    text-align: center;
    position: relative;
  }
  @media screen and (min-width: 1000px) and (max-width: 1300px) {
    width: 9.5vw;
    display: flex;
    background: black;
    flex-direction: column;
    text-align: center;
    position: relative;
  }
`

export const MenuC = styled.div`
  width: 85%;
  margin-left: 15px;
  margin-top: 30px;
  position: fixed;
  color: rgb(211, 211, 211);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    display: none;
  }

  @media screen and (min-width: 500px) and (max-width: 1086px) {
    display: flex;
    background: black;
    position: fixed;
    flex-direction: column;
    width: 8.5vw;
    margin-left: 0px;
    margin-top: 30px;
  }
`
export const DashMenu = styled.button`
  border-radius: 10px;
  width: 140px;
  margin-left: 10px;
  margin-top: 20px;
  height: 51px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: black;
  color: rgb(211, 211, 211);
  font-family: 'Montserrat-SemiBold';
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
    transition-timing-function: ease-out;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #03045e;
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
    transition-timing-function: ease-out;
  }

  &:hover {
    border-color: transparent;
  }
  &:hover:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
  &:hover i {
    -webkit-transform: translateX(4px);
    transform: translateX(4px);
  }

  @media screen and (min-width: 500px) and (max-width: 1086px) {
    display: none;
  }
`

export const DevMenu = styled(DashMenu)``

export const ProfMenu = styled(DashMenu)``
export const SoMenu = styled(DashMenu)`
  margin-top: 30px;
`
export const HomeLink = styled(DashMenu)``

export const Hm = styled(Home)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;

  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 70px;
    cursor: pointer;
  }
`

export const Db = styled(Profile)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
`

export const Us = styled(User)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
`

export const Dv = styled(DeveloperMode)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
`

export const Dvm = styled(DeveloperMode)`
  display: none;
  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 40px;
    height: 40px;
    margin-left: 10px;
    margin-top: 30px;
    cursor: pointer;
  }
`

export const Soss = styled(SignOut)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 55px;
    height: 55px;
    margin-left: 10px;
    margin-top: 30px;
    position: relative;
  }
`

export const Sossm = styled(SignOut)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  display: none;
  @media screen and (min-width: 500px) and (max-width: 1088px) {
    display: flex;
    color: rgb(211, 211, 211);
    width: 55px;
    height: 55px;
    margin-left: 10px;
    margin-top: 30px;
    position: relative;
  }
`
