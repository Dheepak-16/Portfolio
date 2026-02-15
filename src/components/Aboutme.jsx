import React from 'react';
import './Aboutme.css';
import { Col, Row } from 'react-bootstrap';
import img1 from '../assets/img1.jpg';
// import img from '../assets/img.png';

const Aboutme = () => {
  return (
    <div id="aboutme">
      <Row className="justify-content-center">
        <Col lg={10} md={12}>
          <div className="myself">
            <div className="myself-cont">
              <Row>
                <Col lg={12}>
                  <div className="myself1">
                    <span>Developer, Designer,<br />Creator, Innovator</span>
                  </div>
                </Col>

                <Col lg={6} md={12}>
                  <div className="myself2">
                    <img src={img1} alt="Dheepak Selvakumar" />
                  </div>
                </Col>

                <Col lg={6} md={12}>
                  <div className="myself3">
                    <div className="myself3-t1">
                      Hello! I’m <b>Dheepak Selvakumar</b>, a passionate Web Developer who loves
                      building creative, user-friendly, and efficient websites. I focus on crafting
                      clean designs and smooth functionality that bring ideas to life on the web.
                    </div>

                    <div className="myself3-t1">
                      I enjoy working with modern web technologies and continuously improving my
                      skills to create websites that are both visually appealing and technically
                      strong. Currently, I’m expanding my knowledge in backend development to become
                      a <b>Full-Stack Developer</b>, capable of delivering complete web solutions.
                    </div>

                    <div className="myself3-t1">
                      I’m a lifelong learner who thrives on challenges, innovation, and opportunities
                      to make technology more accessible and meaningful.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Aboutme;
