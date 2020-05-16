import styled from 'styled-components';


export const Container = styled.div `
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
background: black;
border: 2px solid white;
border-radius: 3px;
width: 95vw;
height: 700px;
margin-top: 60px;

@media screen and ( max-width: 800px) {
      width: 95vw;
     
      display: flex;
align-items: center;
text-align: center;
flex-direction: column;
  }
`
export const Details = styled.h2 `
color: white;
font-size: 30px;
font-weight: bold;
display: flex;
margin-top: 50px;

`
export const Welcome = styled.h6 `
color: white;
font-size: 25px;
font-weight: bold;
display: flex;
`
export const Create = styled.span `
justify-content: center;
align-items: center;
text-align: center;
display: flex;
flex-direction: column;
`
export const Intro = styled.h3`
color: white;
font-size: 20px;
display: flex;
margin-top: 0px;

`
export const Button = styled.button `
border: 3px solid black;
  border-radius: 4px;
  width: 162px;
  height: 51px;
  border: 2px solid #fff;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: green;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";

  &:hover {
    opacity: 0.5;
  }
  @media screen and ( max-width: 800px) {
      width: 80px;
      font-size: 10px;
  }

 `

 export const Add = styled.div`
 display: flex;
 align-items: center;
 flex-direction: row;
 justify-content: center;
 margin-top: 80px;

 @media screen and ( max-width: 800px) {
  display: flex;
 align-items: center;
 flex-direction: row;
 justify-content: center;
  }
 `

 export const EditButton= styled(Button)`
  margin-left: 30px;
  @media screen and ( max-width: 800px) {
  margin-left: 10px;
  }
  
 ` 



