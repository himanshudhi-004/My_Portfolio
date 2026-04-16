import React, { useEffect } from 'react'
import Typed from 'typed.js'
import profileImage from '../img/5.jpg'

function Home() {
  useEffect(() => {
    const options = {
      strings: ["Web Developer", "Back-end Developer","Python Developer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    }
    
    const typed = new Typed('.typing', options)

    return () => {
      typed.destroy()
    }
  }, [])

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="home section" id="home">
      <div className="container ms-6">
        <div className="row">
          <div className="home-info">
            <h3 className="hello">Hello, I'm <span className="name">Himanshu Dhiman</span></h3>
            <h3 className="my-profession">I'm a <span className="typing"></span></h3>
            <p>My expertise is to create and best websites,designs and many more...</p>
            <a href="#contact" className="btn hire-me" onClick={(e) => { e.preventDefault(); handleHireMe() }}>Hire Me</a>
          </div>
          <div className="home-img">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home