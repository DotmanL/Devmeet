import styled from 'styled-components';

export const Nav = styled.div`
background: black;
border-left: 1px solid white;
border-right: 1px solid white;
border-bottom: 1px solid white;
width: 834px;
text-align: center;
height: 75px;
position: fixed;
display: flex;
flex-direction: row;


  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
   
  }

 
`;

export const Circle = styled.div`
background: white;

border-radius: 50%;
display: none;
width: 50px;
height: 50px;
margin-top: 15px;

@media screen and (max-width: 800px) {
  display: inline-block;
  width: 50px;
height: 50px;
background: white;
border-radius: 50%;
margin-left: -45vw;

  }

`



export const Header = styled.h2`
color: white;
margin-left: 20px;
@media screen and (max-width: 800px) {
  margin-left: 380px;

  }

`