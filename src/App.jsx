import React from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import AboutMe from './components/AboutMe/AboutMe'
import MyServices from './components/MyServices/MyServices'
import MyLatestWork from './components/MyLatestWork/MyLatestWork'
import GetInTouch from './components/GetInTouch/GetInTouch'

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <MyServices />
      <MyLatestWork />
      <GetInTouch />
    </div>
  )
}

export default App