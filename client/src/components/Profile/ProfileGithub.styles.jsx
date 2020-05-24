import styled from 'styled-components';
import {Github} from '@styled-icons/boxicons-logos/Github';

export const Container =styled.div`
background: gray;
display: flex; 
flex-direction: column;
justify-content: center; 
width: 90vw;
margin-top: 10px;
padding-bottom: 20px;
padding-right: 10px;

@media screen and (max-width: 800px) {
    width: 135vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`

export const Header = styled.h2`
font-size: 20px;
color: white;
margin-left: 10px;
`

export const Repod = styled.div`
display: flex;
margin-left: 10px;
background: black;

border: #ccc solid 1px;

:first-child {
  flex: 7;
  flex-basis: 70%;
}

:last-child {
  flex: 3;
  flex-basis: 20%;
}
`

export const RepoN = styled.h4`
color: white;
margin-left: 10px;
`


export const Git = styled(Github)`
  color: white;
  width: 50px;
`

export const Repode =styled.p`
color: white;
font-size: 20px;
margin-left: 5px;
`

export const RepoL = styled.ul`
  font-size: 0.8rem;
  padding: 0.1rem;
  text-align: center;
  margin: 0.3rem;

  color: #333;
  list-style: none;
  
`
export const RepoP = styled.div`
  display: flex;
  flex-direction: row;

`