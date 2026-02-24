import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Project.css";
import weed from '../assets/weed.jpeg'
import grabit from '../assets/grabit.png'
import planet from '../assets/planet.png'

const Project = () => {
  return (
    <div className="project-container" id="project">
      <h1 className="project-title">My Projects</h1>

      <Row className="g-4">
        <Col xs={12} md={6} lg={4}>
          <div className="project-card">
            <img src={weed} alt="Aquaric Weed Harvester" className="project-img" />
            <div className="project-content">
              <h2>Aquatic Weed Harvester</h2>
              <p>
                A remotely controlled aquatic weed harvester designed to efficiently remove water weeds using a robust control system and a practical, user-friendly design.
              </p>

              <div className="tech-stack">
                <span>React</span>
                <span>c</span>
                <span>JavaScript</span>
                <span>IOT Hardwares</span>
              </div>

              <a href="#" className="code-btn">🐙 Code</a>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="project-card">
            <img
              src={grabit} alt="Grabit" className="project-img" />
            <div className="project-content">
              <h2>Grabit Grocery</h2>
              <p>
                An interactive Grabit Grocery web platform that enables users to browse groceries, manage carts, and place orders seamlessly with a fast and user-friendly experience.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>React Bootstrap</span>
                {/* <span>React Icons</span> */}
              </div>

              <a href="https://github.com/Dheepak-16/Grabit" target="_blank" className="code-btn">🐙 Code</a>
            </div>
          </div>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="project-card">
            <img
              src={planet} alt="Batman Theme Website" className="project-img" />
            <div className="project-content">
              <h2>Planet Shopify</h2>
              <p>
                The Planet Shopify website is a dynamic e-commerce platform built with HTML, CSS, JavaScript, PHP, and MySQL for smooth, secure, and responsive online shopping.
              </p>

              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>Java Script</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>

              <a href="https://github.com/Dheepak-16/PlanetShopify" target="_blank" className="code-btn">🐙 Code</a>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Project;
