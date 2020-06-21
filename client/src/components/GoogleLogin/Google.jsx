import React, {Fragment} from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { Gg } from './Google.styles';
import CustomButton from '../custom-button/custom-button';



const Google = ({ informParent = f => f }) => {
  
const responseGoogle = (response) => {
        axios({
            method: 'POST',
            url: '/api/auth/google-login',
            data: { idToken: response.tokenId }
        })
            .then(response => {
            
                // inform parent component
                informParent(response);
            })
            .catch(error => {
               // console.log('GOOGLE SIGNIN ERROR', error.response);
            });
    };
    return (
  <Fragment>
        <GoogleLogin
    clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
    render={renderProps => (
        <CustomButton  onClick={renderProps.onClick} disabled={renderProps.disabled} isGoogleSignIn> <Gg /> Login with Google </CustomButton>
      )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
    </Fragment>
    );
};

export default Google;