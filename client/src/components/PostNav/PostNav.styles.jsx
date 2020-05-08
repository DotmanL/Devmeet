import styled from 'styled-components';

export const Nav = styled.div`
border-bottom: 1px solid white;
border-right: 1px solid white;
background: rgb(5, 91, 94);
text-align: center;
width: 69.5%;
position: fixed;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 800px) {
    width: 100vw;
 
  }

 
`;

export const Header = styled.h1`
color: blue;
margin-left: 300px;

@media screen and (max-width: 500px) {
    margin-left: -90px;
    width: 100vw;
 
  }
`