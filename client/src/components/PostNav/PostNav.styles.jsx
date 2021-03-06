import styled from 'styled-components'
import { Delete } from '@styled-icons/typicons/Delete'
import { Home } from '@styled-icons/entypo/Home'
import { Profile } from '@styled-icons/remix-fill/Profile'
import { UserRectangle } from '@styled-icons/boxicons-solid/UserRectangle'
import { DeveloperMode } from '@styled-icons/material/DeveloperMode'
import { SignOut } from '@styled-icons/octicons/SignOut'

export const Nav = styled.div`
  background: black;
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width: 60vw;
  margin-left: 14.9vw;
  height: 65px;
  position: fixed;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: 0vw;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid gray;
  }
  @media screen and (min-width: 800px) and (max-width: 1063px) {
    width: 73vw;
    margin-left: 7.5vw;
    border-left: 1px solid gray;
  }
`

export const Circle = styled.img`
  background: gray;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-left: 10px;
  display: none;
  position: relative;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 50px;
    height: 50px;
    background: gray;
    border-radius: 50%;
    margin-left: 5vw;
    margin-top: 1.5vh;
  }
`

export const Header = styled.h2`
  color: rgb(211, 211, 211);
  margin-left: 20px;
  position: relative;
  @media screen and (max-width: 800px) {
    color: white;
    margin-left: 80px;
    position: fixed;
    z-index: -4;
  }
`

export const NavM = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    background: black;
    width: 200px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: -70px;
    padding-top: 70px;
    margin-left: -2px;
  }

  @media screen and (min-width: 500px) {
    display: none;
  }
`

export const Hd = styled.h3`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    color: white;
    margin-top: -15px;
    margin-left: 13px;
  }
`

export const Hm = styled(Home)`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    color: white;
    width: 40px;
    height: 40px;
    margin-top: -40px;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const Db = styled(Profile)`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    color: white;
    width: 40px;
    height: 40px;
    margin-top: -40px;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const Pp = styled(UserRectangle)`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    color: white;
    width: 40px;
    height: 40px;
    margin-top: -40px;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const Dv = styled(DeveloperMode)`
  cursor: pointer;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    color: white;
    width: 40px;
    height: 40px;
    margin-top: -40px;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const So = styled(SignOut)`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    color: white;
    width: 40px;
    height: 40px;
    margin-top: -30px;
    margin-left: 10px;
  }
`

export const Dl = styled(Delete)`
  display: none;
  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
    margin-left: 150px;
    margin-top: 30px;
    color: white;
    display: flex;
  }
`

export const CircleC = styled.img`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    width: 50px;
    height: 50px;
    background: gray;
    border-radius: 50%;
    margin-left: 15vw;
    margin-top: -20px;
  }
`
