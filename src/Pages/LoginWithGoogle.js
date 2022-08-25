import React from 'react';
import {GoogleLogin} from 'react-google-login';
    //refresh token
import { refreshTokenSetup } from '../Utils/refreshToken';

const clientId = '1080370152932-oaiv7jc9ql83iiqd0grfl0h1vmc3vsp2.apps.googleusercontent.com';


function LoginWithGoogle() {
    const onSuccess =(res) =>{
        console.log('[Login Success] currentUser:', res.profileObj);

        //initializing the setup
        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

  return (
    <div style={{textAlign: 'center'}}>
        <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{marginTop: '100px',width:"100%"}}
        isSignedIn={true}
        />
    </div>
  )
}

export default LoginWithGoogle;
