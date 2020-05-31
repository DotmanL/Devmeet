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
  width: 100%;
  height: auto;
  flex-direction: row;
  position: relative;
  
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
`
export const TopCover = styled.div`
  background: black;
  width: 68.2%;
  display: flex;
  position: fixed;
  border-bottom: 1px solid gray;
  top: 0;
  z-index: 1;
  flex-direction: row;
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
   background-color: black
  }
`

export const Comments =styled.div`
background: yellow;
flex-direction: column;
display: flex;
`
 