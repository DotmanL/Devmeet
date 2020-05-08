import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(5, 91, 94);
  border-left: 1px solid white;
  width: 35%;
  height: 1500px;
  display: flex;
  
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    display: none;
  }
  `;

  
export const Feed = styled.div`
background: grey;
border-radius: 10px;
width: 15vw;
height: 20vh;
display: flex;
justify-content: center;
margin: 60px auto;

@media screen and (max-width: 1000px) {
    display: none;
  }
`;