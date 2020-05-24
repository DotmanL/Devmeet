import React from 'react'
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
 



const override = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 300px auto;
  border-color: red;
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