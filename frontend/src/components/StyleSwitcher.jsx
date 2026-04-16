import React, { useState, useEffect } from 'react'

function StyleSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      document.body.classList.add('dark')
      setIsDark(true)
    } else {
      setIsDark(false)
    }
    
    // Initialize saved color
    const savedColor = localStorage.getItem('selectedColor')
    if (savedColor) {
      setActiveStyle(savedColor)
    }
  }, [])

  const toggleStyleSwitcher = () => {
    setIsOpen(!isOpen)
  }

  const toggleTheme = () => {
    document.body.classList.toggle('dark')
    const isDarkMode = document.body.classList.contains('dark')
    setIsDark(isDarkMode)
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
  }

  const setActiveStyle = (color) => {
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
    
    document.documentElement.style.setProperty('--skin-color', colorMap[color])
    localStorage.setItem('selectedColor', color)
  }

  return (
    <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
      <div className="style-switcher-toggler s-icon" onClick={toggleStyleSwitcher}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      <div className="day-night s-icon" onClick={toggleTheme}>
        <i className={`fas ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
        <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
        <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
        <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
        <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
        <span className="color-6" onClick={() => setActiveStyle('color-6')}></span>
        <span className="color-7" onClick={() => setActiveStyle('color-7')}></span>
        <span className="color-8" onClick={() => setActiveStyle('color-8')}></span>
        <span className="color-9" onClick={() => setActiveStyle('color-9')}></span>
        <span className="color-10" onClick={() => setActiveStyle('color-10')}></span>
      </div>
    </div>
  )
}

export default StyleSwitcher