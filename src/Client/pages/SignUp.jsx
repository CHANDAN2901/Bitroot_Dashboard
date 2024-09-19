import React, { useState } from "react";
import { Button, Input, Form, message } from "antd";

const SignUp = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleSignUpClick = (values) => {
    setShowPasswordForm(true);
  };

  const handleUpdateClick = (values) => {
    console.log("Password updated");
    message.success("Password updated successfully");
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left side */}
      <div className="w-1/2 bg-blue-50 p-12 flex flex-col justify-between rounded-3xl">
        <div>
          <h1 className="text-7xl font-bold mb-2">Enter the</h1>
          <h2 className="text-7xl font-bold">Future with</h2>
          <h2 className="text-7xl font-bold text-blue-600">Bitroot</h2>
        </div>
        <div>
          <img
            src="steps-success.png"
            alt="Steps Success"
            className="w-max max-w-md"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="w-3/5 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          {!showPasswordForm ? (
            <>
              <div className="flex justify-center mb-8">
                <img src="/logo.png" alt="Bitroot Logo" className="w-45 h-14" />
              </div>

              <h3 className="text-3xl font-semibold mb-2 text-center">
                Sign-Up
              </h3>
              <p className="mb-8 text-gray-600 text-2xl text-center">
                Welcome to Bitroot
              </p>

              <Form name="signup_form" layout="vertical" onFinish={handleSignUpClick}>
                <Form.Item
                  name="username"
                  rules={[
                    { required: true, message: 'Please enter your Login ID' },
                    { min: 4, message: 'Username must be at least 4 characters' },
                    { max: 20, message: 'Username cannot exceed 20 characters' },
                  ]}
                >
                  <Input
                    className="text-lg h-12 bg-blue-50 rounded-full"
                    placeholder="Enter Login ID"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full"
                  >
                    SignUp
                  </Button>
                </Form.Item>
              </Form>
            </>
          ) : (
            <>
              <h3 className="text-4xl font-semibold mb-6">Sign-Up</h3>
              <Form name="password_form" layout="vertical" onFinish={handleUpdateClick}>
                <Form.Item
                  name="newPassword"
                  rules={[
                    { required: true, message: 'Please enter your new password' },
                    { min: 6, message: 'Password must be at least 6 characters' },
                    { max: 12, message: 'Password cannot exceed 12 characters' },
                  ]}
                >
                  <Input.Password
                    className="text-lg h-12 bg-blue-50 rounded-full"
                    placeholder="New Password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirmPassword"
                  dependencies={['newPassword']}
                  rules={[
                    { required: true, message: 'Please confirm your password' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    className="text-lg h-12 bg-blue-50 rounded-full"
                    placeholder="Confirm Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full"
                  >
                    Update
                  </Button>
                </Form.Item>
              </Form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;