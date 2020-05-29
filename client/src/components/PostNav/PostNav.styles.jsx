import styled from 'styled-components';

export const Nav = styled.div`
background: black;
border-left: 1px solid gray;
border-right: 1px solid gray;
border-bottom: 1px solid gray;
width: 730px;
text-align: center;
height: 75px;
position: fixed;
display: flex;
flex-direction: row;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 500px) {
   width: 100vw;
   border-left: 1px solid black;
border-right: 1px solid black;
border-bottom: 1px solid white;
  }

  @media screen and (min-width: 500px) and (max-width: 1063px) {
    display: flex;
    width: 71vw;
    position: fixed;
  
  }

 
`;

export const Circle = styled.img`
background: gray;
border-radius: 50%;
width: 50px;
height: 50px;
margin-top: 15px;
margin-left: 10px;
display: none;

@media screen and (max-width: 800px) {
  display: flex;
  width: 50px;
height: 50px;
background: gray;
border-radius: 50%;
margin-left: 5vw;

  }

`



export const Header = styled.h2`
color: white;
margin-left: 20px;
@media screen and (max-width: 800px) {

  }

`