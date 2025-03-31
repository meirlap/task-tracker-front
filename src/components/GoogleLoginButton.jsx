import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log('Login Success:', credentialResponse);
        }}
        onError={() => {
          console.error('Login Failed');
        }}
        useOneTap
      />
    </div>
  );
};

export default GoogleLoginButton;
