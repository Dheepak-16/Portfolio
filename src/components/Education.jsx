import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h1 className="education-title">Educational Journey</h1>
      <p className="education-subtitle">
        Discover how academic excellence shapes innovative thinking and professional growth.
      </p>

      <Row className="mt-4">
        <Col md={6}>
          <div className="edu-card">
            <h2 className="edu-card-title">📘 Higher Secondary Certificate (HSC)</h2>

            <div className="edu-info">
              <p>🏫 Ponnu Matric Higher Secondary School</p>
              <p>📅 2020-2021</p>
            </div>

            <p className="edu-description">
              Built a solid foundation in Biology through detailed study of scientific principles
              and Strengthened practical skills with regular laboratory experiments.
            </p>

            <h4 className="achievement-title">🏆 Key Achievements</h4>

            <div className="achievement-tags">
              <span className="tag">Percentage: 81%</span>
              <span className="tag">Subject: Biology</span>
            </div>

            <div className="subject-list">
              <span>Mathematics</span>
              <span>Physics</span>
              <span>Chemistry</span>
              <span>Biology</span>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="edu-card">
            <h2 className="edu-card-title">📗 Bachelor Degree</h2>

            <div className="edu-info">
              <p>🏫 Dr.N.G.P Institute of Technology</p>
              <p>📅 2021-2025</p>
            </div>

            <p className="edu-description">
              Developed strong analytical and problem-solving abilities through core IT coursework.
              Enhanced technical skills by applying concepts in real-world projects.
            </p>

            <h4 className="achievement-title">🏆 Key Achievements</h4>

            <div className="achievement-tags">
              <span className="tag">CGPA: 7</span>
              <span className="tag">Degree: B.Tech Information Technology</span>
            </div>

            <div className="subject-list">
              <span>Programming</span>
              <span>DBMS</span>
              <span>Computer Networks</span>
              <span>Web Technologies</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
