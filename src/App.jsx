import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleLoginButton from './components/GoogleLoginButton';
import SheetReader from './components/SheetReader';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      console.log('🟢 User restored from localStorage:', JSON.parse(storedUser));
    } else {
      console.log('🟡 No user found in localStorage');
    }
  }, []);

  const handleLoginSuccess = (userInfo) => {
    localStorage.setItem('user', JSON.stringify(userInfo));
    setUser(userInfo);
    console.log('✅ Login Success:', userInfo);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    console.log('🚪 User logged out');
  };

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>כניסת מטופלים</h1>
        {user ? (
          <>
            <button onClick={handleLogout}>התנתק</button>
            <SheetReader user={user} />
          </>
        ) : (
          <GoogleLoginButton onSuccess={handleLoginSuccess} />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
