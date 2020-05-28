import React from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
 



const override = css`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50vh;
  border-color: red;

  @media screen and (max-width: 800px) {
    display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 50vh;
  }
`;
const Spinner = () => {
  return (
   
       <div className="sweet-loading">
        <BeatLoader
          css={override}
          size={50}
          color={"#FFFFFF"}
          
        />
      </div> 
  )
}

export default Spinner
