import styled from 'styled-components';
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'


export const Container = styled.div`
width: 95vw;
border: 3px solid white;
margin-right: auto;
margin-left: auto;
background: black;
margin-top: 10vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

@media screen and (max-width: 800px) {

  font-size: 20px;
 margin-top: 80px;
 border: 0px;
}
`

export const SA =styled(SearchAlt)`
width: 30px;
height: 30px;
`

export const Title = styled.h1`
font-size: 30px;
color: white;

margin-top: 20px;

@media screen and (max-width: 800px) {
 font-size: 25px;
 margin-top: 18px;
}
`

export const SubTitle = styled.h3`
font-size: 30px;
color: white;
margin-top: -20px;

@media screen and (max-width: 800px) {
  margin-top: -10px;
  font-size: 13px;
}
`


export const Npf = styled.h4`
font-size: 30px;
color: white;
margin-left: 40px;
`

export const ProfilesL = styled.div`
 display: flex;
 flex-direction: column;

`