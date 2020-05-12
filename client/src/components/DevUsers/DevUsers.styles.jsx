import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled.div`
  background: rgb(5, 91, 94);
  width: 15%;
  border-right: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  position: fixed;
  
  @media screen and (max-width: 500px) {
    display: none;
  
  }
  
  `;



export const Header = styled(Link)`
  color: white;
  font-size: 30px;
  margin-top: 15px;
  margin-left: 25px;
  `;