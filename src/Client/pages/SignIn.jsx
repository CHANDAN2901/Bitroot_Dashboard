// import React, { useEffect, useState } from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Form, Input } from 'antd';
// import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

// const LoginPage = () => {
//   const [form] = Form.useForm();
//   const [clientReady, setClientReady] = useState(false);

//   // To disable submit button at the beginning.
//   useEffect(() => {
//     setClientReady(true);
//   }, []);

//   const onFinish = (values) => {
//     console.log('Finish:', values);
//   };

//   return (
//     <div className="flex h-screen  bg-white">
//       {/* Left side */}
//       <div className="w-2/5 bg-blue-50 p-8 flex flex-col justify-between">
//         <div>
//           <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
//           <h2 className="text-6xl font-bold text-blue-900">Bitroot Dashboard</h2>
//         </div>
//         <div>
//           <img src="../logo.png" alt="Bitroot Logo" className="w-48" />
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="w-3/5 p-8 flex items-center justify-center">
//         <div className="w-full max-w-md">
//           <h3 className="text-4xl font-semibold mb-6">Login</h3>
//           <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish} className=" p-6 rounded-lg shadow-lg">
//             <Form.Item
//               name="username"
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input your username!',
//                 },
//               ]}
//               className="mb-4"
//             >
//               <Input
//                 prefix={<UserOutlined />}
//                 placeholder="Username"
//                 className="text-lg h-12"
//               />
//             </Form.Item>
//             <Form.Item
//               name="password"
//               rules={[
//                 {
//                   required: true,
//                   message: 'Please input your password!',
//                 },
//               ]}
//               className="mb-4"
//             >
//               <Input
//                 prefix={<LockOutlined />}
//                 type="password"
//                 placeholder="Password"
//                 className="text-lg h-12"
//               />
//             </Form.Item>
//             <Form.Item shouldUpdate>
//               {() => (
//                 <Button
//                   type="primary"
//                   htmlType="submit"
//                   className="w-full h-12 bg-blue-900 text-white"
//                 >
//                   Log in
//                 </Button>
//               )}
//             </Form.Item>
//           </Form>
//           <p className="mt-4 text-center">
//             Don't have an account?{' '}
//             <a href="#" className="text-blue-600">
//               Sign up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

// import React from 'react';
// import { Button, Form, Input } from 'antd';
// import 'tailwindcss/tailwind.css';

// const LoginPage = () => {
//   const onFinish = (values) => {
//     console.log('Finish:', values);
//   };

//   return (
//     <div className="flex h-screen bg-white">
//       {/* Left side */}
//       <div className="w-1/2 bg-blue-50 p-12 flex flex-col justify-between">
//         <div>
//           <h1 className="text-7xl font-bold mb-2">Enter the</h1>
//           <h2 className="text-7xl font-bold">Future with</h2>
//           <h2 className="text-7xl font-bold text-blue-600">Bitroot</h2>
//         </div>
//         <div>
//           <img src="/steps-success.png" alt="Steps Success" className="w-full max-w-md" />
//         </div>
//       </div>

//       {/* Right side */}
//       <div className="w-1/2 p-12 flex items-center justify-center bg-white">

//         <div className="w-full max-w-md">
//           <h3 className="text-3xl font-semibold mb-2">Sign-Up</h3>
//           <p className="mb-8 text-gray-600 text-2xl">Welcome to Bitroot</p>
//           <Form name="signup_form" layout="vertical" onFinish={onFinish}>
//             <Form.Item
//               name="username"
//               className="mb-4"
//             >
//               <Input
//                 placeholder="Enter Login ID"
//                 className="text-lg h-12 bg-blue-50 rounded-full"
//               />
//             </Form.Item>
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full"
//               >
//                 SignUp
//               </Button>
//             </Form.Item>
//           </Form>
//           <p className="mt-4 text-center text-gray-600">
//             Already have an account?{' '}
//             <a href="#" className="text-blue-600 hover:underline">
//               Login
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React from "react";
import { Button, Form, Input } from "antd";
import "tailwindcss/tailwind.css";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className="flex h-screen bg-white p-8">
      {/* Left side */}
      <div className="w-1/2 bg-blue-50 p-12 flex flex-col justify-between rounded-3xl">
        <div>
          <h1 className="text-7xl font-bold mb-2">Enter the</h1>
          <h2 className="text-7xl font-bold">Future with</h2>
          <h2 className="text-7xl font-bold text-blue-600">Bitroot</h2>
        </div>
        <div>
          <img
            src="/steps-success.png"
            alt="Steps Success"
            className="w-max max-w-md"
          />
        </div>
      </div>

      <div className="w-1/2 p-12 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <h3 className="text-3xl font-semibold mb-2 text-center">Sign In</h3>
          <p className="mb-8 text-gray-600 text-2xl text-center">
            Welcome to Bitroot
          </p>

          <Form name="signin_form" layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please enter your Login ID' },
                { min: 4, message: 'Username must be at least 4 characters' },
                { max: 20, message: 'Username cannot exceed 20 characters' },
              ]}
            >
              <Input
                placeholder="Enter Login ID"
                className="text-lg h-12 bg-blue-50 rounded-full"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your password' },
                { min: 6, message: 'Password must be at least 6 characters' },
                { max: 12, message: 'Password cannot exceed 12 characters' },
              ]}
            >
              <Input.Password
                placeholder="Enter Password"
                className="text-lg h-12 bg-blue-50 rounded-full"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold rounded-full"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;