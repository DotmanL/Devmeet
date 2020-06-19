import styled from 'styled-components';
import homepage from './homepage.jpg'



export const HomePageContainer = styled.div `
display: flex;
flex-direction: column;
height: 100vh;
align-items: center;
position: relative;
padding-top: 40px;
text-align: center;
background-color: #14213d;
@media screen and (max-width: 800px) {
  }
`

export const HomeContent = styled.div`
 background-image:url(${homepage});
  background-size: cover;
  background-repeat: no-repeat;
   box-shadow:inset 0 0 0 2000px  rgba(0, 0, 94, 0.4);
  display: flex;  
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  width: 95vw;
  height: 100vh;
  margin-bottom: 20px;
  margin-top: 5vh;
  border: 3px solid white;
 
  @media screen and (max-width: 800px) {
    background-size: cover;
    background-position: center;
    width: 320px;
    margin-top: -4vh;
}
`

export const Title = styled.h1`
color: white;
font-size: 50px;
font-family: 'Arvo', serif;
margin-top: 90px;

@media screen and (max-width: 800px) {
    font-size: 40px;
}

`
export const SubTitle = styled.h3`
color: white;
font-size: 25px;
width: 75vw;
`

export const Button = styled.button`
  color: #333;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  flex-direction: row;  
  width: 90px;
  height: 50px;
  text-align: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  
  &:hover {
    opacity: 0.8;
    background-color: green;
  }
`;
export const Buttons = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: center;
  
`;
 
export const SignInButton = styled(Button)` 
background-color: #14213d; 
margin-left: 20px;
color: white;
@media screen and (max-width: 800px) {
    font-size: 15px;
}

`;
 
export const SignUpButton = styled(Button)` 
  background-color: #14213d;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 15px;
}
  
`;