import styled from 'styled-components';
import {Like} from '@styled-icons/boxicons-solid/Like'
import {Dislike} from '@styled-icons/boxicons-regular/Dislike'
import {CommentDots} from '@styled-icons/boxicons-solid/CommentDots'
import {Delete} from '@styled-icons/material/Delete'

export const Post =styled.div`
background: white;
border-bottom: 2px solid black;
margin-top: 0px;
width: 93%;
display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    

}
`


export const UserImg = styled.img`
  background: purple;
  border-radius: 50%;
  display: inline-block;
  width: 80px;
  height: 80px;


  

  @media screen and (max-width: 800px) {
    width: 50px;
  height: 50px;

  }
`
export const Name = styled.h4`
  font-size: 20px;
  color: black; 
  margin-top: 10px;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
   margin-left: 0px;
   font-size: 15px;
   margin-top: 5px;
  }
`
export const UserDet =styled.div`
display: flex;
height: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 800px) {
   height: 60px;
  }
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  margin-left: -20px;
  
  @media screen and (max-width: 800px) {
   margin-left: 0px;
  }
`

export const PostText = styled.p`
  font-size: 18px;
  color: black; 
  margin-top: -25px;
  padding-left: 20px;
  width: 90%;
  @media screen and ( max-width: 800px) {
   font-size: 15px;
   padding-left: 0px;
   width: 95%;
   margin-top: -20px;
     }
 
`

export const PostDate = styled.p`
  font-size: 15px;
  color: black; 
  align-self: flex-start;
  padding-left: 20px;
  margin-top: -15px;

  @media screen and ( max-width: 800px) {
   padding-left: 0px;
   margin-top: -10px;
     }
 
`
export const LowerC =styled.div`
 display: flex;
  flex-direction: row;
  align-self: flex-start;
  padding-left: 15px;
  text-align: center;
  @media screen and ( max-width: 800px) {
   padding-left: 0px;
     }
 
  

`
export const LikeB=styled.button`
 border: 3px solid black;
  border-radius: 5px;
  border: 2px solid #fff;
  cursor: pointer;
  background: blue;
  color: #fff;
  margin-right: 130px;

  :hover {
    opacity: 0.6;
  }
  @media screen and ( max-width: 800px) {
   margin-right: 20px;
     }
  `
  export const UnlikeB =styled(LikeB)`
  `

export const DiscB =styled(LikeB)`
background: green;
`
export const DelB =styled(LikeB)`
background: red;
`


export const Lk =styled(Like)`
color: white;
display: flex;
flex-direction: column;
width: 20px;
height: 20px;
margin-left: 3px;
text-align: center;
cursor: pointer;
@media screen and ( max-width: 800px) {
  width: 10px;
height: 10px;
     }
`
export const Dk =styled(Dislike)`
color: white;
width: 20px;
height: 20px;
margin-left: 3px;
cursor: pointer;
@media screen and ( max-width: 800px) {
  width: 10px;
height: 10px;
     }
`
export const Cm =styled(CommentDots)`
color: white;
width: 20px;
height: 20px;
margin-left: 3px;
cursor: pointer;
@media screen and ( max-width: 800px) {
  width: 10px;
height: 10px;
     }
`

export const Dl =styled(Delete)`
color: white;
width: 20px;
height: 20px;
margin-left: 3px;
cursor: pointer;
@media screen and ( max-width: 800px) {
  width: 10px;
height: 10px;
     }
`