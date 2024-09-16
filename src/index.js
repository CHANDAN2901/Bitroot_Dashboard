import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignUp from './pages/SignUp';
import Onboarding from './pages/Onboarding';
import SignIn from './pages/SignIn';
import ProjectDashboard from './pages/ProjectDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>   
    {/* <SignUp /> */}
    {/* <Onboarding /> */}
    {/* <SignIn /> */}
    <ProjectDashboard />
  </React.StrictMode>
);

