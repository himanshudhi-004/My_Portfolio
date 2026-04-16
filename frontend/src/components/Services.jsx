import React from 'react'

function Services() {
  const services = [
    { icon: "fa-code", title: "Web Development", description:"Build responsive websites using HTML, CSS, Bootstrap, React.js ,Mobile-friendly UI design Component-based architecture Dark mode support, Clean and modern layouts" },
    { icon: "fa-python", title: "Python Development", description:"Backend development using Python, FastAPI, Flask REST API creation & integration Data processing using Pandas & NumPy Authentication & business logic implementation"  },
    { icon: "fa-plug", title: "API Integration" , description:"Third-party API integration Fetch & display real-time data Error handling & validation JSON data handling" },
    { icon: "fa-react", title: "React Application Development" , description:"Build dynamic SPA using React.js Routing and state management Form validation & UI components Performance optimization" },
    { icon: "fa-database", title: "Database Integration" , description:"Database design & integration PostgreSQL/ MySQL connectivity CRUD operations Secure data storage" },
    // { icon: "fa-bullhorn", title: "Web Developer" , description:"Build responsive websites using HTML, CSS, Bootstrap, React.js ,Mobile-friendly UI design Component-based architecture Dark mode support, Clean and modern layouts" }
  ]

  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="service-item padd-15" key={index}>
              <div className="service-item-inner">
                <div className="icon">
                  <i className={`fa ${service.icon}`}></i>
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services