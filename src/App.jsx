import gsap from 'gsap'
import {ScrollTrigger , SplitText} from 'gsap/all'
import React from 'react'
gsap.registerPlugin(ScrollTrigger , SplitText)
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Cocktails from './components/CockTails'
const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Cocktails/>
    </main>
  )
}

export default App