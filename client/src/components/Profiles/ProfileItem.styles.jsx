import styled from 'styled-components';
import {Check} from '@styled-icons/boxicons-regular/Check'



export const Ch =styled(Check)`
color: white;
width: 30px;
height: 30px;
margin-left: 0px;
cursor: pointer;
color: green;
`

export const Container = styled.div`
border-radius: 10px;
border: 2px solid white;
background: black;
width: 80vw;
margin-right: auto;
margin-left: auto;
flex-direction: row;
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 8px;
margin-bottom: 20px;
padding-bottom: 10px;

@media screen and (max-width: 800px) {
 
  flex-direction: column;
display: flex;
justify-content: flex-start;
align-items: center;
}
`

export const DevContainer = styled.div`
background: black;
width: 65vw;
margin-left: 20px;
border-radius: 10px;
flex-direction: column;
display: flex;




@media screen and (max-width: 800px) {
  flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
}

`

export const Circle = styled.img`
background: white;
border-radius: 50%;
display: inline-block;
width: 150px;
height: 150px;
margin-top: 15px;
margin-left: 10px;

@media screen and (max-width: 800px) {
  width: 100px;
height: 100px
  }
`


export const Name = styled.h2`
font-size: 20px;
color: white;
margin-top: 0px;
`

export const Status = styled.p`
font-size: 20px;
color: white;
margin-top: -20px;

@media screen and (max-width: 800px) {
  text-align: center;
}

`

export const Location = styled.h3`
font-size: 20px;
color: white;
`
export const PButton = styled.button `
border: 3px solid black;
  border-radius: 4px;
  width: 120px;
  height: 35px;
  border: 2px solid #fff;
  margin-top: -5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: black;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; 

  @media screen and (max-width: 800px) {
  font-size: 16px;
}
` 

export const List =styled.div`
color: white;
@media screen and (max-width: 800px) {
  
}
`

export const ListL =styled.ul`
list-style: none;
margin-left: 40vw;
margin-top: -20vh;


@media screen and (max-width: 800px) {
  color: white;
display: flex;
flex-direction: row;
flex-flow: row wrap;
align-items: center;
margin-left: 0vw;
margin-top: 0vh;


}
`