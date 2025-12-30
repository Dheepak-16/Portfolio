import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-cont" id="experience">
      <div className="experience-cont1">
        <h1 className="head">Professional Journey</h1>
      </div>

      <div className="experience-cont1-sub">

        <div className="exp-card">
          <Row className="g-4 align-items-center">
            <Col xs={12} md={6} lg={4}>
              <div className="exp-card1">
                <span className="role-badge">💻 Web Developer Intern</span>
                <br />
                <span className="company-badge">🏢 Mist Solutions, Coimbatore</span>

                <div className="role-desc">
                  Leading development of scalable web applications using
                  React, Node.js, and AWS. Mentoring junior developers
                  and implementing best practices.
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="exp-card2 timeline">
                <span className="timeline-line"></span>
                <div className="exp-card2-sub">
                  <span className="year-icon">📅</span>
                  <span className="year-text">2024</span>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}></Col>
          </Row>
        </div>

        <div className="exp-card">
          <Row className="g-4 align-items-center">
            <Col xs={12} md={6} lg={4}></Col>

            <Col xs={12} md={6} lg={4}>
              <div className="exp-card2 timeline">
                <span className="timeline-line"></span>
                <div className="exp-card2-sub">
                  <span className="year-icon">📅</span>
                  <span className="year-text">2025</span>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} lg={4}>
              <div className="exp-card3">
                <span className="role-badge">💻 Mern Stack Intern</span>
                <br />
                <span className="company-badge">🏢 GT Softwares, Coimbatore</span>

                <div className="role-desc">
                  Developed web applications using the MERN stack (MongoDB, Express.js, React, Node.js).
                  Built RESTful APIs and integrated frontend components with backend services.
                </div>
              </div>
            </Col>
          </Row>
        </div>

      </div>
    </div>
  );
};

export default Experience;
