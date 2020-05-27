import styled from 'styled-components';
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'


export const Back = styled(ArrowIosBack) `
 color: red;
  width: 40px;
`
export const Goback = styled.button`
border: 3px solid black;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  border: 2px solid #fff;
  margin-top: 40px;
  margin-left: 0px;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: black;
  color: white;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";

  @media screen and ( max-width: 800px) {
      margin-top: 10px;  
      margin-left: 0px;
      font-weight: 100;
      font-size: 13px;
        
  }
`



export const Edit =styled.button`
border: 3px solid black;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  border: 2px solid #fff;
  margin-top: -40px;
  margin-left: 190px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: green;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";
`

export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: black;
border: 3px solid white;
border-radius: 6px;
padding-bottom: 30px;
margin-top: 9vh;
margin-right: auto;
margin-left: auto;
width: 95vw;

@media screen and ( max-width: 800px) {
  width: 97vw;
  border: 0px solid white;
      margin-top: 10vh;
  }
`

export const SubContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
border-radius: 6px;
padding-bottom: 30px;
margin: 20px auto;
width: 95vw;

@media screen and ( max-width: 800px) {
    
      display: flex;
flex-direction: column;
align-items: center;    
  }
`

export const PexpHeader= styled.h2`
font-size: 20px;
color: white;
`
export const PeduHeader= styled.h2`
font-size: 20px;
color: white;
`
export const ProfileExpContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: black;
border: 2px solid darkblue;
border-radius: 6px;

margin: 20px auto;
width: 45vw;

@media screen and ( max-width: 800px) {
  width: 80vw;
      display: flex;
flex-direction: column;
align-items: center;    
text-align: center; 
  }
`

export const ProfileduContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background: black;
border: 2px solid darkblue;

border-radius: 6px;

margin: 20px auto;
width: 45vw;
@media screen and ( max-width: 800px) {
     
  width: 80vw;
      display: flex;
flex-direction: column;
align-items: center; 
text-align: center;   
  }
`
export const Nec = styled.h2`
font-size: 20px;
`