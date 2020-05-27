import styled from 'styled-components'
import { Like } from '@styled-icons/boxicons-solid/Like'
import { Dislike } from '@styled-icons/boxicons-regular/Dislike'
import { CommentDots } from '@styled-icons/boxicons-solid/CommentDots'
import { Delete } from '@styled-icons/material/Delete'

export const Post = styled.div`
  background: black;
  border-bottom: 1px solid white;
  margin-top: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const UserImg = styled.img`
  background: purple;
  border-radius: 50%;
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-left: -5px;

  @media screen and (max-width: 800px) {
    width: 60px;
    height: 60px;
  }
`
export const Name = styled.h4`
  font-size: 20px;
  color: white;
  margin-top: -60px;
  padding-left: 90px;
  @media screen and (max-width: 800px) {
    padding-left: 80px;
    font-size: 15px;
  }
`
export const UserDet = styled.div`
  display: flex;
  background: black;
  height: 70px;
  margin-top: 5px;
  width: 70px;
  flex-direction: row;
  padding-left: 10px;
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
  margin-top: -25px;
  padding-left: 90px;
  width: 90%;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    padding-left: 80px;
    width: 100%;
  }
`

export const PostDate = styled.p`
  font-size: 15px;
  color: white;
  align-self: flex-start;
  padding-left: 90px;
  margin-top: -15px;

  @media screen and (max-width: 800px) {
    padding-left: 80px;
    margin-top: -10px;
  }
`
export const Lower = styled.div`
  display: flex;
  background: black;
  flex-direction: column;
  padding-left: 65px;
  @media screen and (max-width: 800px) {
    padding-left: 80px;
    
  }
`
export const LowerC = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  text-align: center;
  cursor: pointer;
  position: relative;
  @media screen and (max-width: 800px) {
    padding-left: 0px;

    margin-top: -2px;
  }
`

export const Lk = styled(Like)`
  color: white;
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
export const Dk = styled(Dislike)`
  color: white;
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
  color: white;
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

export const Dl = styled(Delete)`
  color: white;
  width: 30px;
  height: 30px;
  margin-left: 150px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    margin-left: 50px;
  }
`
