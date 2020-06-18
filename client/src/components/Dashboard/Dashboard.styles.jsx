import styled from 'styled-components';
import {Profile} from '@styled-icons/remix-fill/Profile'
import {BlackTie} from '@styled-icons/fa-brands/BlackTie'
import {Graduation} from "@styled-icons/boxicons-solid/Graduation"


export const Container = styled.div `
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
background: black;
border: 2px solid white;
width: 85vw;
padding-bottom: 30px;
margin-top: 13vh;
border-radius: 8px;


@media screen and ( max-width: 800px) {
  
        border: 0px solid white;
      width: 100vw;
      margin-top: 0vh;  
      }
`
export const Details = styled.h2 `
color: white;
font-size: 30px;
font-weight: bold;
@media screen and ( max-width: 800px) {
   font-size: 20px;
  }
`



export const Prof =styled(Profile)`
color: white;
width: 20px;
height: 20px;
margin-left: -5px;
cursor: pointer;

@media screen and ( max-width: 800px) {
  width: 15px;
height: 15px;
margin-left: 1px;
     }
`

export const BT =styled(BlackTie)`
color: white;
width: 20px;
height: 20px;
margin-left: -5px;
cursor: pointer;
@media screen and ( max-width: 800px) {
  width: 15px;
height: 15px;
margin-left: 1px;
     }
`

export const GD =styled(Graduation)`
color: white;
width: 20px;
height: 20px;
margin-left: -5px;
cursor: pointer;
@media screen and ( max-width: 800px) {
  width: 15px;
height: 15px;
margin-left: 1px;
     }
`


export const Welcome = styled.h6 `
color: white;
font-size: 25px;
font-weight: bold;
margin-top: -20px;
@media screen and ( max-width: 800px) {
   font-size: 20px;
  }

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
  width: 122px;
  height: 51px;
  border: 2px solid #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  background: #14213d;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";

  &:hover {
    opacity: 0.5;
  }
  @media screen and ( max-width: 800px) {
      width: 90px;
  }

 `

 export const Add = styled.div`
 display: flex;
 font-size: 10px;
 flex-direction: row;
 margin-top: 0px;

 @media screen and ( max-width: 800px) {
font-size: 10px;

  }
 `

 export const EditButton= styled(Button)`
  margin-left: 30px;
  padding: 20px auto;
  @media screen and ( max-width: 800px) {
  margin-left: 10px;
  }
  
 ` 




export const DeleteButton = styled.button`
width: 90px;
height: 50px;
background: red;
border: 1px solid orange;
border-radius: 2px;
text-align: center;
cursor: pointer;


:hover{
  opacity: 0.5;
}

`