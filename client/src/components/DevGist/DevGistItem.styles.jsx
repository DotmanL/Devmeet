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


  }
`





export const Post = styled.div`
  background: black;
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
  color: white;
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
  color: white;
  margin-top: -55px;
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
  color: gray;
  align-self: flex-start;
  padding-left: 110px;
  margin-top: -10px;
  border-bottom: 1px solid gray;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding-left: 85px;
    margin-top: -10px;
    border-bottom: 1px solid gray;
   
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
color: white;

@media screen and (max-width: 800px) {
    display: flex;
    
  }
`


export const Dl = styled(Delete)`
  color: red;
  width: 30px;
  height: 30px;
  margin-left: 120px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: 30px;
  }
`

export const ModalC =styled.div`

color: white;
flex-direction: column;
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
 background: white;
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
  color: white;
  margin-top: -90px;
  padding-left: 95px;
`

export const ModalT =styled.p`
font-size: 18px;
  color: white;
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
  color: white;
  width: 45px;
  height: 45px;

  margin-left: 166.4px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 35px;
    height: 35px;
   
    margin-left: 50px;
  }
`

