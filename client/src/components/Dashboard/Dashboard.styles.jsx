import styled from 'styled-components';
import {Link } from 'react-router-dom';

export const Container = styled.div `
display: flex;
align-items: center;
text-align: center;
flex-direction: column;
background: black;
border: 2px solid white;
border-radius: 3px;
width: 95vw;
margin-left: 20px;
height: 700px;
margin-top: 60px;
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
export const Ibutton = styled.button `
background: greenyellow;
width: 120px;
height: 40px;
border-radius: 5px;
font-size: 18px;
text-align: center;
padding-top: 5px;
color: black;

`

