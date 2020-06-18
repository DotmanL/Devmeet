import styled from 'styled-components';

export const Title = styled.h2`
font-size: 25px;
color: white;
display: flex;
flex-direction: column;
align-items: flex-end;
@media screen and ( max-width: 800px) {
   font-size: 20px;
   margin-left: 20px;
  }
`

export const TableT = styled.p`
padding: 1rem;
text-align: left;
`

export const ButtonD = styled.button`
width: 70px;
height: 30px;
background: red;
border: 1px solid orange;
border-radius: 2px;
text-align: center;
cursor: pointer;

:hover{
  opacity: 0.5;
}

`