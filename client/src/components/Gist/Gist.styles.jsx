import styled from 'styled-components'
import {ArrowBack} from '@styled-icons/evaicons-solid/ArrowBack'

export const Ar = styled(ArrowBack) `
 color: white;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
  }

`

export const PostsPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
    height: 100%;
    padding-bottom: -50px;
    
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100vh;
  }
  
  
  @media screen and (max-width: 1300px) {
 
  }  
  
`

export const Container = styled.div`
  background: black;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  
  height: auto;
`
export const TopCover = styled.div`
  background: black;
  width: 63.0vw;
  display: flex;
  position: fixed;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  top: 0;
  z-index: 1;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`
export const Cover = styled.div`
  width: 850px;
  background: black;
  display: flex;
  position: relative;
  flex-direction: column;
`
export const Header =styled.h1`
font-size: 25px;
color: white;
padding-left: 0px;
@media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 20px;
  }

`
export const Circle =styled.div`
 border-radius: 50px;
 height: 50px;
 width: 50px;
 background: linear-gradient(to left, black 50%, gray 50%);
 background-size: 200% 100%;
 background-position: right bottom;
 transition: all 2s ease;
 margin-top: 10px;
 display: flex;
 flex-direction: column;
 margin-left: 10px;
 justify-content: center;
 :hover {
  background-position: left bottom;
  } 

  @media screen and (max-width: 800px) {
   background: black;
   background: linear-gradient(to left, black 50%, black 50%);
  }
`

export const Comments =styled.div`
background: black;
flex-direction: column;
display: flex;
`
 