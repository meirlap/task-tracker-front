import React from 'react';
import SheetReader from './components/SheetReader';
import GoogleLoginButton from './components/GoogleLoginButton';

const App = () => {
  return (
    <div>
            <GoogleLoginButton />

      <h1 style={{ textAlign: "center" }}>מערכת משימות מטופלים</h1>
      <SheetReader />
    </div>
  );
};

export default App;
