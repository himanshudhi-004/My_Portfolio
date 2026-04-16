import React from "react";
import resumeFile from "../resume/Himanshu Dhiman_Resume.pdf";

function About() {
  const calculateAge = () => {
    const birthday = new Date("2004-11-02");
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() - birthday.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    
    return age;
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Himanshu Dhiman_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Himanshu Dhiman and{" "}
                  <span>Web Developer/Software Developer</span>
                </h3>
                <p>
                  Computer Science Engineering graduate with strong knowledge of
                  Core Java, OOP, and databases. Experience building web
                  applications using Java, HTML, CSS, JavaScript, React, and
                  MySQL. Seeking a Software Developer Fresher role to apply
                  problem-solving skills and grow professionally.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday: <span>02-Nov-2004</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age: <span>{calculateAge()}</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email: <span>himanshudhiman0004@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      B.Tech: <span>Computer Science & Engineering</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone: <span>+91 9971431645</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      State & City: <span>Uttar Pardesh & Greater Noida</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Country: <span>India</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      For Job: <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a
                      href="#"
                      className="btn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleDownloadResume();
                      }}
                    >
                      Download Resume
                    </a>
                    <a href="#contact" className="btn">
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
              <div className="skills padd-15">
                <div className="row">
                  <div className="skill-item padd-15">
                    <h5>HTML, CSS, Bootstrap, React.js, JSP (Basic).</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "85%" }}
                      ></div>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>Java, Python, JavaScript</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "70%" }}
                      ></div>
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5> PostgreSQL , MySQL, Oracle</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "60%" }}
                      ></div>
                      <div className="skill-percent">60%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>
                      {" "}
                      Visual Studio Code, Sublime Text, GitHub
                    </h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "80%" }}
                      ></div>
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                  <div className="skill-item padd-15">
                    <h5>FastAPI (Basic)</h5>
                    <div className="progress">
                      <div
                        className="progress-in"
                        style={{ width: "40%" }}
                      ></div>
                      <div className="skill-percent">40%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2021-2025
                        </h3>
                        <h4 className="timeline-title">
                          Bachelor of Technology in Computer
                          Science(pursuing){" "}
                        </h4>
                        <p className="timeline-text">
                          Mangalmay Institute Of Engineering & Technology,
                          Greater Noida
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2020-2021
                        </h3>
                        <h4 className="timeline-title">Class 12th</h4>
                        <p className="timeline-text">
                          Ram-eesh International School, Greater Noida
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2018-2019
                        </h3>
                        <h4 className="timeline-title">Class 10th</h4>
                        <p className="timeline-text">
                          Ram-eesh International School, Greater Noida
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="experience padd-15">
                <h3 className="title">Experience</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> February-2026 to
                          March 2026
                        </h3>
                        <h4 className="timeline-title">
                          Embetter Technologies Pvt Ltd., India
                        </h4>
                        <p className="timeline-text">
                          <span className="fw-bold">
                            Software Engineer (Intern) –{" "}
                          </span>
                          Developed LetsConfab, a multi-provider LLM system
                          using FastAPI by integrating OpenAI, Gemini, and
                          Ollama with fallback logic, BYOK support, streaming
                          responses, and Docker-based scalable architecture.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> November-2025 to
                          January 2026
                        </h3>
                        <h4 className="timeline-title">
                          Infosoft Technologies, India
                        </h4>
                        <p className="timeline-text">
                          <span className="fw-bold">
                            Software Engineer (Intern) –{" "}
                          </span>
                          Duty Management Project Developed a ReactJS-based user
                          interface with API integration for data fetching, form
                          validation, and role-based access control. Connected
                          frontend with backend services and implemented
                          Firebase notifications for real-time alerts and
                          updates. & Janasunwai Project (Complaint Management
                          System) Worked on login integration, complaint
                          response module, and SP profile management using React
                          and Redux state management. Implemented API
                          connectivity, dynamic routing, and fixed integration
                          issues to improve data handling and UI performance.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> July 24 to Aug 2024
                        </h3>
                        <h4 className="timeline-title">
                          UniCoverge Technologies (Internship) Noida, India
                        </h4>
                        <p className="timeline-text">
                          <span className="fw-bold">
                            Core Java Developer (Intern) –{" "}
                          </span>
                          Developed a Music Web Application using Java, HTML,
                          CSS, and JSP with features like song upload, playlist
                          creation, user authentication, and performance
                          optimization.
                        </p>
                      </div>
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> February-2024 to
                          March 2024
                        </h3>
                        <h4 className="timeline-title">
                          UniCoverge Technologies (Internship) Noida, India
                        </h4>
                        <p className="timeline-text">
                          <span className="fw-bold">
                            Python Developer (Intern) –{" "}
                          </span>
                          Developed and maintained Python-based applications and
                          scripts. Collaborated with cross-functional teams to
                          design efficient solutions for data processing and
                          automation tasks. Utilized libraries such as Pandas,
                          NumPy, and Flask for data manipulation and web
                          development. Participated in code reviews, debugging,
                          and performance optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
