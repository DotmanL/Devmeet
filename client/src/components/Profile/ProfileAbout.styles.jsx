import styled from 'styled-components';


export const Main = styled.div`
`


export const Container = styled.div`
background: gray;
border: 2px solid darkblue; 
width: 90vw;
display: flex;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 800px) {
  width: 135vw;  
  display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    
  }

`

export const Header = styled.h2`
color: white;
font-size: 25px;
`
export const BioT =styled.p`
font-size: 20px;
color: white;
margin-top: -20px;
text-align: center;
width: 80vw;

`

export const Sheader =styled.h2`
color: white;
font-size: 25px;
`

export const Sk = styled.div`  
 display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-flow: row wrap;
  

`
export const Ski = styled.p`
color: white;
`
