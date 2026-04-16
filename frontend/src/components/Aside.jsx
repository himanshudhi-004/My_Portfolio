import React, { useState, useEffect } from 'react'

function Aside() {
  const [activeSection, setActiveSection] = useState('home')
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsNavOpen(false)
    }
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={`aside ${isNavOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home') }}><span>H</span>D</a>
      </div>
      <div className={`nav-toggler ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
        <span></span>
      </div>
      <ul className="nav ms-4">
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('home') }}><i className="fa fa-home"></i>Home</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('about') }}><i className="fa fa-user"></i>About</a></li>
        <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('services') }}><i className="fa fa-list"></i>Services</a></li>
        <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('portfolio') }}><i className="fa fa-briefcase"></i>Portfolio</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); handleNavClick('contact') }}><i className="fa fa-comments"></i>Contact</a></li>
      </ul>
    </div>
  )
}

export default Aside