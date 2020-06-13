import styled from 'styled-components'
import { Twitter } from '@styled-icons/entypo-social/Twitter'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube'
import { Web } from '@styled-icons/foundation/Web'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'

export const Container = styled.div`
  width: 90vw;
  margin-top: 10px;
  background: black;
  border: 1.5px solid white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
   
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
  }
`

export const Circle = styled.img`
  background: white;
  border-radius: 50%;
  display: inline-block;
  width: 150px;
  height: 150px;
  margin-left: 30px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 800px) {
    margin-left: 20px;

  }
`

export const DetContainer = styled.div`
  width: 350px;
  height: 200px;
  margin-left: 30px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`
export const Title = styled.h2`
  font-size: 25px;
  color: white;
  margin-top: 0px;
  border-right: 0px;
`

export const Status = styled.h3`
  font-size: 15px;
  color: white;
  margin-top: -30px;
`

export const Location = styled.h3`
  font-size: 15px;
  color: white;
  margin-top: 0px;
`

export const Edit = styled.button`
  border: 3px solid white;
  border-radius: 8px;
  width: 120px;
  height: 40px;
  border: 2px solid #fff;
  margin-top: -5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: green;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Montserrat-SemiBold';
  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
`

export const Icons = styled.div`
  height: 50px;
  width: 440px;
  margin-left: 10px;
  margin-top: 70px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    margin-top: 20px;
    width: 80vw;
  }
`

export const Yt = styled(Youtube)`
  color: white;
  width: 50px;
`
export const Twit = styled(Twitter)`
  color: white;
  width: 50px;
`

export const Fb = styled(FacebookSquare)`
  color: white;
  width: 50px;
`

export const Linked = styled(LinkedinSquare)`
  color: white;
  width: 50px;
`

export const Ig = styled(Instagram)`
  color: white;
  width: 50px;
`
export const Webb = styled(Web)`
  color: white;
  width: 50px;
`
