import React from 'react';
import Lottie from "lottie-react";
import mobileAnim from '../assets/mobileAnim.json';
import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAnimation } from "react-icons/md";
import { RxCode } from "react-icons/rx";
import { GrStorage} from "react-icons/gr";
import { CgViewComfortable } from "react-icons/cg";
import { FiCloud } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";
import { RiBrushAiLine } from "react-icons/ri";

function Skills() {
  return (
    <div className='skills-background' id='skills'>
      <div className='mobileAnim'>
        <div style={{ width: "420px" , position: "relative" , zIndex: "1"}}>
          <Lottie animationData={mobileAnim} loop={true} />
        </div>
      </div>

      <Container>
        <Row className="g-4">
          <Col xs={12} md={6} lg={4}>
            <div className="skill-card">
              <h3><RxCode className='skills-icons-front1'/>Frontend Development</h3>
              <div className="skill-tags">
                <span><FaReact className='skill-icons'/> React</span>
                <span><FaHtml5 className='skill-icons'/>HTML5</span>
                <span><FaCss3Alt className='skill-icons'/>CSS3</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="skill-card">
              <h3><GrStorage className='skills-icons-front2'/>Backend Development</h3>
              <div className="skill-tags">
                <span><FaNodeJs className='skill-icons'/>Node.js</span>
                <span><SiMongodb className='skill-icons'/>MongoDB</span>
                <span>REST APIs</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="skill-card">
              <h3><CgViewComfortable className='skills-icons-front3'/>UI/UX Design</h3>
              <div className="skill-tags">
                <span><FaFigma className='skill-icons'/>Figma</span>
                <span>Responsive Design</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="skill-card">
              <h3><FiCloud className='skills-icons-front4'/>Cloud & DevOps</h3>
              <div className="skill-tags">
                <span><FaAws className='skill-icons'/>AWS</span>
                <span><FaGitAlt className='skill-icons'/>Git</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="skill-card">
              <h3><FiCpu className='skills-icons-front5'/>Tools & Technologies</h3>
              <div className="skill-tags">
                <span><VscVscodeInsiders className='skill-icons'/>VS Code</span>
                <span><IoLogoVercel className='skill-icons'/>Vercel</span>
                <span><SiVite className='skill-icons'/>Vite</span>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="skill-card">
              <h3><RiBrushAiLine className='skills-icons-front6'/>Creative Skills</h3>
              <div className="skill-tags">
                <span><MdAnimation className='skill-icons'/>UI Animation</span>
                <span><MdOutlineAnimation className='skill-icons'/>SVG Animation</span>   
              </div>
            </div>
          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default Skills;
