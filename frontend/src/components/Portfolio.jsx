import React from "react";
import project1 from "../img/project-1.png";
import project2 from "../img/project-2.webp";
import project3 from "../img/project-3.png";
import project4 from "../img/project-4.png";
import project5 from "../img/project-5.png";

function Portfolio() {
  const services = [
    {
      image: project1,
      title: "Lets Confab(Using Python)",
      description:
        "Built LetsConfab, a multi-provider LLM system using FastAPI. Integrated OpenAI, Gemini, and Ollama models with fallback logic. Implemented BYOK system and streaming responses. Used Docker, Git, and LangGraph for structured AI workflows. Focused on cost optimization and multi-model architecture.",
    },
    {
      image: project2,
      title: "Duty-Management(Using Reactjs)",
      description:
        "Developed user interface using ReactJS. Integrated APIs for data fetching and submission. Implemented forms, validation, role-based data handling, and UI improvements. Connected frontend with backend services and handled error scenarios. Implemented Firebase notification system to send real time alerts and updates to users.",
    },
    {
      image: project3,
      title: "News Website(Using Reactjs)",
      description:
        "Developed a dynamic News Web Application that fetchesand displays real-time news articles from public APIs. Implemented features like category-based filtering, searchfunctionality, and responsive layout using Bootstrap. Used React.js with TypeScript for component-basedarchitecture and better type safety. Focused on clean UI design, fast rendering, and smoothuser experience across all devices.",
    },
    {
      image: project4,
      title: "Music Website(Using Java)",
      description:
        "Developed a basic Music Web Application using Java, HTML, CSS, and JSP for frontend and backend integration. Implemented core features like song upload, playlist creation, and user authentication.  Assisted in debugging, testing, and enhancing application performance.",
    },
    {
      image: project5,
      title: "ERP Portal(Using Python)",
      description:
        "Developed a web-based ERP system for student registration and authentication.  Front-end: HTML, CSS, JavaScript . Back-end: Python for authentication & business logic. Database: MySQL for secure data storage and management",
    },
  ];

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Latest Projects : </h2>
          </div>
        </div>
        <div className="row portfolio-grid">
          {services.map((service, index) => (
            <div
              className="portfolio-item padd-15"
              key={index}
            >
              <div className="portfolio-item-inner">
                <div className="portfolio-img">
                  <img
                    src={service.image}
                    alt={service.title}
                  />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
