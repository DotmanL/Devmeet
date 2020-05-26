import styled from 'styled-components';

export const Container = styled.div`
  background: black;
  border-left: 1px solid white;
  border-right: 1px solid white;
  border-top: 1px solid white;
  margin-top: 5px;
  width: 850px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-width: 800px) {
    width: 100vw;
    border: 0px;
    
  }
  
  `;

export const Header = styled.h2`
color: white;
font-size: 30px;
align-self: flex-start;
padding-left: 30px;
margin-top: 90px;
@media screen and (max-width: 800px) {

    
  }
`


export const Welcome = styled.p`
color: white;
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
background: black;
flex-direction: column;
justify-content: center;
width: 99%;
align-items: center;
padding-bottom: 250px;
@media screen and (max-width: 800px) {
     
      width: 95vw;
    
  }
`