import styled from 'styled-components'
import { Like } from '@styled-icons/boxicons-solid/Like'
import { Dislike } from '@styled-icons/boxicons-regular/Dislike'
import { CommentDots } from '@styled-icons/boxicons-solid/CommentDots'
import { Delete } from '@styled-icons/typicons/Delete'
import {CloseCircle} from '@styled-icons/evaicons-solid/CloseCircle'

export const Pc = styled.div`
cursor: pointer;
display: flex;

@media screen and (max-width: 800px) {
    display: none;
  }
`
export const Mb = styled.div`
display: none;
@media screen and (max-width: 800px) {
    display: flex;
    position: relative;
   margin-top: 20px;

  }
`





export const Post = styled.div`
  border-bottom: 1px solid gray;
  margin-top: 0px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 100vw;
    border-bottom: 1.5px solid gray;
  }
`

export const UserImg = styled.img`
  background: rgb(211,211,211);
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

export const PostImageContainer = styled.div`
width: 80%;
height: 40%;
margin-left: 125px;
padding-bottom: 18px;
margin-top: -30px;
@media screen and (max-width: 800px) {
    margin-left: 95px;
    width: 70%;
    margin-top: -20px;
   
  }

`

export const PostImage =styled.img`
border-radius: 10px;
height: 40%;
width: 100%;
`
export const Name = styled.h4`
  font-size: 20px;
  color: rgb(211,211,211);
  margin-top: -90px;
  padding-left: 125px;

  :hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 800px) {
    padding-left: 95px;
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

  flex-direction: column;
 
  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`

export const PostText = styled.h5`
  font-size: 18px;
  color: rgb(211,211,211);
  margin-top: -35px;
  padding-left: 130px;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    padding-left: 95px;
    width: 80%;
    margin-top: -28px;
  }
`

export const PostDate = styled.h6`
  font-size: 13px;
  color: gray;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 40px;
  margin-top: -25px;


  @media screen and (max-width: 800px) {
    padding-right: 15px;
    margin-top: -29px;
  
   
  }
`
export const AltDate = styled.div`
margin-top: -40px;
padding-left: 10px;
@media screen and (max-width: 800px) {
  padding-left: 5px;
    margin-top: 10px;
  
   
  }
`

export const Lower = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(211,211,211);
  font-size: 15px;
  padding-left: 125px;
  margin-top: 20px;

  @media screen and (max-width: 800px) {
    padding-left: 100px;
    margin-top: -25px;
    font-size: 12px;
    
  }
`
export const LowerC = styled.div`
  display: flex;
  border-bottom: 0.6px solid gray;
  flex-direction: row;
  padding-left: 125px;
  margin-top: 25px;
  text-align: center;
  position: relative;
  padding-bottom: 10px;
  @media screen and (max-width: 800px) {
    
    padding-left: 95px;
    margin-top: -15px;
    border-bottom: 0.6px solid gray;
  }
`
export const LowerCa = styled.div`
  display: flex;
  border-bottom: 0px solid gray;
  flex-direction: row;
  padding-left: 125px;
  margin-top: -20px;
  text-align: center;
  position: relative;
  padding-bottom: 1px;
  @media screen and (max-width: 800px) {
    padding-left: 98px;
    margin-top: -15px;
  }
`

export const Lk = styled(Like)`
  color: gray;
  width: 30px;
  height: 30px;

  margin-left: 166.4px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
   
    margin-left: 50px;
  }
`
export const Dk = styled(Dislike)`
   color: gray;
  width: 30px;
  height: 30px;
  margin-left: 166.4px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: 50px;
  }
`
export const Cm = styled(CommentDots)`
   color: gray;
  width: 30px;
  height: 30px;
  margin-left: 3px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: 0px;
  
    
  }
`



export const Cms =styled.span`
color: rgb(211,211,211);

@media screen and (max-width: 800px) {
    display: flex;
    
  }
`


export const Dl = styled(Delete)`
  color: red;
  width: 30px;
  height: 30px;
  margin-left: 80px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: 30px;
  }
`

export const ModalC =styled.div`
background: black;
color: rgb(211,211,211);
flex-direction: column;
position: relative;

`
export const ModalU =styled.div`
display: flex;
  height: 93px;
  margin-top: 1px;
  width: 93px;
  flex-direction: column;
  padding-left: 5px;
  padding-right: 10px;
 
`
export const ModalImg = styled.img`
 background: rgb(211,211,211);
  border-radius: 50%;
  display: inline-block;
  background: black;
  position: relative;
  margin-top: 5px;
  width: 70px;
  height: 70px;
`

export const ModalN =styled.h4`
  font-size: 20px;
  color: rgb(211,211,211);
  margin-top: -90px;
  padding-left: 95px;
`

export const ModalT =styled.p`
font-size: 18px;
  color: rgb(211,211,211);
  margin-top: -30px;
  padding-left: 95px;
  width: 95%;
  
  @media screen and (max-width: 800px) {
    width: 80vw;
    
  }
`

export const ModalD = styled.p`
 font-size: 13px;
  color: gray;
  align-self: flex-start;
  padding-left: 95px;
  margin-top: -20px;
  width: 100%;
`


export const ModalClose = styled(CloseCircle)`
  color: rgb(211,211,211);
  resize: none;
  width: 45px;
  height: 45px;
  outline: none;
  border: 1px solid black;
  stroke: none;
  margin-left: 166.4px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
   
    margin-left: 50px;
  }
`

