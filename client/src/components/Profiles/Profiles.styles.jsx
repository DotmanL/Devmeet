import styled from 'styled-components';
import {SearchAlt} from '@styled-icons/boxicons-regular/SearchAlt'


export const Container = styled.div`
width: 850px;
border: 3px solid white;
margin-right: auto;
margin-left: auto;
margin-top: 120px;

@media screen and (max-width: 800px) {
 font-size: 20px;
 margin-top: 70px;
}
`

export const SA =styled(SearchAlt)`
width: 30px;
height: 30px;
`

export const Title = styled.h1`
font-size: 30px;
color: white;
margin-left: 50px;
margin-top: 20px;

@media screen and (max-width: 800px) {
 font-size: 25px;
 margin-top: 10px;
}
`

export const SubTitle = styled.h3`
font-size: 30px;
color: white;
margin-left: 40px;
margin-top: -20px;

@media screen and (max-width: 800px) {
  margin-top: -10px;
  font-size: 26px;
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
 align-content: center;
 justify-content: center;
`