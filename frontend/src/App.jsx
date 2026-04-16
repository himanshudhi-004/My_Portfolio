import React, { useEffect } from 'react'
import Aside from './components/Aside'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import StyleSwitcher from './components/StyleSwitcher'

// Import all skin colors
import './skins/color-1.css'
import './skins/color-2.css'
import './skins/color-3.css'
import './skins/color-4.css'
import './skins/color-5.css'
import './skins/color-6.css'
import './skins/color-7.css'
import './skins/color-8.css'
import './skins/color-9.css'
import './skins/color-10.css'

const colorMap = {
  'color-1': '#ec1839',
  'color-2': '#fa5b0f',
  'color-3': '#37b182',
  'color-4': '#1854b4',
  'color-5': '#f021b2',
  'color-6': '#fb0094',
  'color-7': '#fcfc0d',
  'color-8': '#fec203',
  'color-9': '#a12e9f',
  'color-10': '#3fc1c9'
}

function App() {
  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.body.classList.add('dark')
    }
    
    // Initialize color from localStorage
    const savedColor = localStorage.getItem('selectedColor') || 'color-1'
    document.documentElement.style.setProperty('--skin-color', colorMap[savedColor])
  }, [])

  return (
    <div className="main-container">
      <Aside />
      <div className="main-content">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <StyleSwitcher />
    </div>
  )
}

export default App