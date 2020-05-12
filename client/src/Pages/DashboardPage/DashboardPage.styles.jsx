import  styled from 'styled-components';
import {Link } from 'react-router-dom';

export const PageContainer = styled.div `
height: 50vh;
`



export const Container = styled.div `
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
background: white;
opacity: 0.8;
width: 50vw;
margin-left: 2vw;
margin-top: -550px;
height: 80vh;
`

export const Details = styled.h2 `
color: black;
font-size: 40px;
font-weight: bold;
display: flex;
margin-top: -47%;

`
export const Welcome = styled.h6 `
color: black;
font-size: 25px;
font-weight: bold;
display: flex;
`
export const Buttons = styled.div `
border-radius: 5px;
display: flex;
margin-left: 150px;
margin-top: 10px;
flex-direction: row-reverse;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer;

`

export const Prof = styled.div `
background: gray;
width: 70px;
height: 30px;
border-radius: 5px;
display: flex;
margin-left: -85%;
margin-top: 10px;
flex-direction: row;
justify-content: center;
align-items: center;
text-align: center;
`

export const Proft = styled(Link)`
color: black;
font-size: 10px;
display: flex;


`