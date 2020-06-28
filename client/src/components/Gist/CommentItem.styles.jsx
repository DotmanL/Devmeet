import styled from 'styled-components';
import { Delete } from '@styled-icons/typicons/Delete'

export const CommentI = styled.div`
background: black;
border-bottom: 1px solid gray;
margin-top: 0px;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 800px) {
  width: 100vw;
  border-bottom: 1px solid gray;
}
`

export const UserImg = styled.img`
background: white;
border-radius: 50%;
display: inline-block;
cursor: pointer;
position: relative;
width: 89px;
height: 89px;
margin-left: -5px;

@media screen and (max-width: 800px) {
  width: 60px;
  height: 60px;
}
`
export const Name = styled.h4`
font-size: 20px;
color: rgb(211,211,211);
margin-top: -90px;
padding-left: 110px;

:hover {
  text-decoration: underline;
}
@media screen and (max-width: 800px) {
  padding-left: 85px;
  font-size: 15px;
  margin-top: -60px;
}
`
export const UserDet = styled.div`
display: flex;
height: 93px;
margin-top: 5px;
width: 93px;
flex-direction: row;
padding-left: 20px;
padding-right: 10px;
@media screen and (max-width: 800px) {
  height: 60px;
}
`

export const PostContainer = styled.div`
display: flex;
background: black;
flex-direction: column;

@media screen and (max-width: 800px) {
  margin-left: 0px;
}
`

export const PostText = styled.p`
font-size: 18px;
color: rgb(211,211,211);
margin-top: -60px;
padding-left: 110px;
width: 95%;
@media screen and (max-width: 800px) {
  font-size: 15px;
  padding-left: 85px;
  width: 100%;
  margin-top: -40px;
}
`

export const PostDate = styled.p`
font-size: 13px;
color: rgb(211,211,211);
align-self: flex-start;
padding-left: 110px;
margin-top: -10px;
border-bottom: 1px solid gray;
width: 100%;

@media screen and (max-width: 800px) {
  padding-left: 85px;
  margin-top: -10px;
 
}
`

export const Lower = styled.div`
  display: flex;
  background: black;
  flex-direction: column;
  padding-left: 95px;
  @media screen and (max-width: 800px) {
    padding-left: 80px;
    
  }
`
export const LowerC = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  text-align: center;
  position: relative;
  @media screen and (max-width: 800px) {
    padding-left: 0px;

    margin-top: -2px;
  }
`

export const Dl = styled(Delete)`
  color: red;
  width: 30px;
  height: 30px;
  margin-left: 90%;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: 90%;
  }
`