import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

const GoogleLoginButton = ({ onSuccess }) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwt_decode(credentialResponse.credential);
        console.log('🔓 Decoded Google User:', decoded);
        onSuccess(decoded);
      }}
      onError={() => {
        console.error('❌ Login Failed');
      }}
    />
  );
};

export default GoogleLoginButton;
