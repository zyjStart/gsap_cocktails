import gsap from 'gsap'
import {ScrollTrigger , SplitText} from 'gsap/all'
import React from 'react'
gsap.registerPlugin(ScrollTrigger , SplitText)
import NavBar from './components/NavBar'
const App = () => {
  return (
    <main>
      <NavBar />
    </main>
  )
}

export default App