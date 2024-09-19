import { useState } from 'react'
import SignIn from './Client/pages/SignIn'
import SignUp from './Client/pages/SignUp'
import OnboardingQuestions from './Client/pages/OnBoardingQuestions'
import ProjectDashboard from './Client/pages/ProjectDashBoard'
import ProjectProgressTracker from './Client/pages/ProjectProgressTracker'
import HeaderComponent from './Client/components/HeaderComponent'

function App() {
  return (
    <>
    {/* <ProjectDashboard /> */}
    {/* <HeaderComponent /> */}
    <ProjectProgressTracker />
    </>
  )
}

export default App
