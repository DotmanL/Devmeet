import styled from 'styled-components';
import {Check} from '@styled-icons/boxicons-regular/Check'



export const Ch =styled(Check)`
color: white;
width: 30px;
height: 30px;
margin-left: 3px;
cursor: pointer;
color: green;
`

export const Container = styled.div`
border-radius: 10px;
border: 2px solid white;
background: black;
width: 800px;
height: 220px;
margin-right: auto;
margin-left: auto;
flex-direction: row;
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 8px;
margin-bottom: 10px;



@media screen and (max-width: 800px) {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
`

export const DevContainer = styled.div`
background: black;
width: 590px;
height: 200px;
margin-left: 20px;



@media screen and (max-width: 800px) {
 
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


`

export const Status = styled.p`
font-size: 20px;
color: white;
margin-top: -20px;
`

export const Location = styled.h3`
font-size: 20px;
color: white;
`
export const PButton = styled.button `
border: 3px solid black;
  border-radius: 4px;
  width: 120px;
  height: 40px;
  border: 2px solid #fff;
  margin-top: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
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

` 

export const List =styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: -180px;
color: white;

@media screen and (max-width: 800px) {
  display: flex;
flex-direction: row;
  margin-right: 50px;
}
`