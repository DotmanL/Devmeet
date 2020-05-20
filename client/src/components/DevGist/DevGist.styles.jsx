import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(5, 91, 94);
  border-left: 1px solid white;
  width: 80%;
  height: 1500px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
      width: 10%;
    
  }

  
  @media screen and (max-width: 500px) {
    border-left: 0px;
    width: 100%;
 
  }
  
  `;

export const Subheader = styled.div`
background: greenyellow;
margin-top: 100px;
margin-left: 200px;
width: 20vw;
height: 100px;
position: absolute;

@media screen and (max-width: 500px) {
    width: 100vw;
    margin-left: 0px;
 
  }

`
