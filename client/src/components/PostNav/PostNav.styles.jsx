import styled from 'styled-components';

export const Nav = styled.div`
border-bottom: 1px solid white;
border-right: 1px solid white;
background: rgb(5, 91, 94);
text-align: center;
width: 69.5%;
height: 75px;
position: fixed;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 100vw;
 
  }

 
`;

export const Circle = styled.div`
background: white;
margin-left: -350px;
border-radius: 50%;
display: inline-block;
width: 50px;
height: 50px;
margin-top: 15px;

@media screen and (max-width: 450px) {
  display: inline-block;
  margin-left: -300px;
  width: 30px;
height: 30px;
margin-top: 40px;
  }

`



export const Header = styled.h2`
color: white;
margin-left: -200px;
margin-top: -42px;

@media screen and (max-width: 460px) {
    
  margin-top: -39px;
  
 
  }
`