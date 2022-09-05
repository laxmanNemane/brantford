import React from 'react'
import {GoogleLogout} from 'react-google-login';

const clientId = '1080370152932-oaiv7jc9ql83iiqd0grfl0h1vmc3vsp2.apps.googleusercontent.com';


function LogoutFromGoogle() {
    const onSuccess = () => {
        alert('logout successfuly');
    }
    
  return (
    <div>
      <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      
      />
    </div>
  )
}

export default LogoutFromGoogle
