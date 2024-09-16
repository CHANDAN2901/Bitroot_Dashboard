import React, { useState } from 'react';
import { Button, Input } from 'antd';

const SignUp = () => {
  const [loginId, setLoginId] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUpClick = () => {
    if (loginId.trim() !== '') {
      setShowPasswordForm(true);
    }
  };

  const handleUpdateClick = () => {
    // Here you would typically handle the password update logic
    console.log('Password updated');
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left side */}
      <div className="w-2/5 bg-blue-50 p-8 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
          <h2 className="text-6xl font-bold text-blue-900">Bitroot Dashboard</h2>
        </div>
        <div>
          <img src="../logo.png" alt="Bitroot Logo" className="w-48" />
        </div>
      </div>

      {/* Right side */}
      <div className="w-3/5 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {!showPasswordForm ? (
            <>
              <h3 className="text-4xl font-semibold mb-6">Sign-Up</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <Input 
                    className="h-12 text-lg" 
                    type="text" 
                    placeholder="Enter Login ID" 
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full h-12 bg-blue-900 text-white text-lg" 
                  onClick={handleSignUpClick}
                >
                  SignUp
                </Button>
              </form>
              <p className="mt-4 text-center">
                Already have an account? <a href="#" className="text-blue-600">Login</a>
              </p>
            </>
          ) : (
            <>
              <h3 className="text-4xl font-semibold mb-6">Sign-Up</h3>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <Input 
                    className="h-12 text-lg" 
                    type="password" 
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <Input 
                    className="h-12 text-lg" 
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Button 
                  className="w-full h-12 bg-blue-900 text-white text-lg" 
                  onClick={handleUpdateClick}
                >
                  Update
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;