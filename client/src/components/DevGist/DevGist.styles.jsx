import styled from 'styled-components';

export const Container = styled.div`
   background: black;
  border-top: 0.5px solid gray;
  margin-top: 5px;
  width: 950px;
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  @media screen and (max-width: 800px) {
    width: 100vw;
 border: 1px solid black;
  }
  
  `;

export const Cover =styled.div`
display: flex;
flex-direction: column;
width: 100%;
position: relative;
margin-top: -8px;
border-bottom: 1px solid gray;

`
export const Header = styled.h2`
color: rgb(211,211,211);
font-size: 30px;
align-self: flex-start;
padding-left: 30px;
margin-top: 90px;
@media screen and (max-width: 800px) {

    
  }
`


export const Welcome = styled.p`
color: rgb(211,211,211);
font-size: 25px;
align-self: flex-start;
padding-left: 30px;
margin-top: -30px;
@media screen and (max-width: 800px) {
  font-size: 15px;
    
  }
`

export const Posts =styled.div`
display: flex;

flex-direction: column;
justify-content: center;
width: 100%;
height: auto;
align-items: center;
padding-bottom: 50px;

@media screen and (max-width: 800px) {
    width: 90vw;
    padding-bottom: 10px;
  
  }
`

export const Reached =styled.h1`
color: rgb(211,211,211);
font-size: 30px;

@media screen and (max-width: 800px) {
    width: 90vw;
    padding-bottom: 20px;
  }

`