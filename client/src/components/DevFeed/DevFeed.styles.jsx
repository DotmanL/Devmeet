import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  border-left: 1px solid gray;
  width: 25vw;
  height: auto;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  text-align: center;
  position: relative;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`

export const Feed = styled.div`
  background: grey;
  border-radius: 10px;
  width: 15vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  margin: 80px auto;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
