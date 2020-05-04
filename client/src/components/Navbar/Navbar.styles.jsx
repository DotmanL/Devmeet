
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//import { ReactComponent as Explore } from '../explore.svg';
//import { ReactComponent as Avatar } from '../avatar.svg';
//import { ReactComponent as Compass } from '../compass.svg';
 
export const Nav = styled.div`
  background-color: rgb(5, 91, 94);
  height: 15vh;
  width: 100%;
  border-bottom: 2px solid white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  
  @media screen and ( max-width: 800px) {
      width: 100%;
      height: 9vh;
  }

`;
 
export const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
export const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
  color: white;
  font-size: 30px;
  margin-top: -20px;

  @media screen and ( max-width: 800px) {
      margin-left: 100px;
      font-size: 40px;
  }

`;
 
export const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
 
 
export const NavRight = styled.div`
   width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 15px;
    margin-right: -90px;

    @media screen and ( max-width: 800px) {
      margin-right: 0px;
  }

    

    @media screen and ( max-width: 800px) {
      width: 80%;
  }

 
  svg {
    margin-right: 20px;
  }
`;

export const MenuLink = styled(Link)`
 color: white;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: none;
  
  padding: 10px 20px;
  cursor: pointer;


  @media screen and ( max-width: 800px) {
      font-size: 13px;
      padding: 5px 6px;
  }
`;



export const TitleLink = styled(Link)`
 color: white;
  font-size: 50px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-decoration: none;
  margin-left: -100px;
  cursor: pointer;


  @media screen and ( max-width: 800px) {
      font-size: 25px;
      padding: 5px 6px;
  }
`;