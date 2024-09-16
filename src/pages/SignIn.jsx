import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const LoginPage = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
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
          <h3 className="text-4xl font-semibold mb-6">Login</h3>
          <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish} className=" p-6 rounded-lg shadow-lg">
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
              className="mb-4"
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                className="text-lg h-12"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              className="mb-4"
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
                className="text-lg h-12"
              />
            </Form.Item>
            <Form.Item shouldUpdate>
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full h-12 bg-blue-900 text-white"
                >
                  Log in
                </Button>
              )}
            </Form.Item>
          </Form>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <a href="#" className="text-blue-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
