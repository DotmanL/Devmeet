import styled from "styled-components"


export const Navigation = styled.nav`
  height: 10vh;
  width: 100vw;
  display: flex;
  position: fixed;
  background-color: #14213d;
  top: 0;
    left: 0;
    right: 0;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 1px solid white;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  @media (max-width: 800px) {
    position: sticky;
    height: 8vh;
    background-color: black;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 800px) {
    display: flex;
    padding: 0 4vw;
  }
`
export const Logo = styled.p`
color: white;
font-size: 20px;
margin-top: 20px;
font-weight: 700;
cursor: pointer;
font-family: 'Vollkorn', serif;
position: relative;
:hover{
  color: goldenrod;
}
@media screen and  (max-width: 800px) {
  margin-top: 10px;
}
`

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  color: white;
  font-size: 20px;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    opacity: 0.9;
    background-color: white;
      color: blue;
    justify-content: flex-start;
    padding-top: 10vh;
    transition: all 0.3s ease-in;
    top: 8vh;
    right: ${props => (props.open ? "-100%" : "0")};
  }
`

export const Hamburger = styled.div`
 background-color: #f1faee;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color:#f1faee;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`