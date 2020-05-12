import React from 'react'
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {

  const responseFacebook = (response) => {
    console.log(response);
  }
  return (
    <div>
        <FacebookLogin
      appId=""
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />,
    </div>
  )
}

export default Facebook;
