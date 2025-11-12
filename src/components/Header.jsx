import React from 'react';
import './Header.css';
import { IoHome } from "react-icons/io5";
import { FaAlignLeft } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { IoMdSchool, IoMdContact } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <div className='Header'>
      <div className="homebar-cont">
        <nav className="homebar">
          <ul>
            <li><div className="li1"><IoHome className="homebar-icons" /> Home</div></li>
            <li><div className="li1"><FaAlignLeft className="homebar-icons" /> Skills</div></li>
            <li><div className="li1"><MdWork className="homebar-icons" /> Experience</div></li>
            <li><div className="li1"><IoMdSchool className="homebar-icons" /> Education</div></li>
            <li><div className="li1"><FaComputer className="homebar-icons" /> Projects</div></li>
            <li><div className="li1"><IoMdContact className="homebar-icons" /> Contact</div></li>
          </ul>
        </nav>
      </div>

      <br /><br />

      <div className="cont1">
        <Row>
          <Col lg={6} md={12}>
            <div className="name-cont">
              <div className="hello">
                <span>Hello<br />I'm Dheepak Selvakumar</span>
              </div>

              <div className="learning">
                <span>Full-Stack Developer</span>
              </div>

              <div className="learning2">
                <span>Web Developer🧑🏻‍💻 | Learning New Technologies💻✨ | Coding the Future🌏</span>
              </div>

              <div className="buttons">
                <button className='but1'>Learn More</button>
                <button className='but1'>Get Resume</button>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <div className="profile-cont">
              <div className="card">
                <div className="tools">
                  <div className="circle-cont">
                    <div className="circle"><span className="red box"></span></div>
                    <div className="circle"><span className="yellow box"></span></div>
                    <div className="circle"><span className="green box"></span></div>
                  </div>
                  <span className='developer'>developer.js</span>
                </div>

                <div className="card__content">
                  <div className="About-code-r">
                    <div>
                      <span style={{ color: '#C792EA' }}>const</span>{' '}
                      <span style={{ color: '#A6ACCD' }}>profile</span>{' '}
                      <span style={{ color: '#89DDFF' }}>=</span>{' '}
                      <span style={{ color: '#A6ACCD' }}>{'{'}</span>
                    </div>

                    <div className="About-code-r1">
                      <div>
                        <span style={{ color: '#FFFFFF' }}>name</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#f60571ff' }}>'Dheepak Selvakumar'</span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div>

                      <div>
                        <span style={{ color: '#FFFFFF' }}>title</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#f60571ff' }}>
                          'Full-Stack Developer | Problem Solver'
                        </span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div>

                      <div>
                        <span style={{ color: '#FFFFFF' }}>skills</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#A6ACCD' }}>{'['}</span>
                      </div>

                      <div className="About-code-r1">
                        <div>
                          <span style={{ color: '#82AAFF' }}>'React'</span>,{' '}
                          <span style={{ color: '#82AAFF' }}>'NextJS'</span>,{' '}
                          <span style={{ color: '#82AAFF' }}>'Express'</span>,{' '}
                          <span style={{ color: '#82AAFF' }}>'MySQL'</span>,{' '}
                          <span style={{ color: '#82AAFF' }}>'MongoDB'</span>,{' '}
                          <span style={{ color: '#82AAFF' }}>'Git'</span>
                        </div>
                      </div>

                      <div>
                        <span style={{ color: '#A6ACCD' }}>{']'}</span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div>

                      <div>
                        <span style={{ color: '#FFFFFF' }}>hardWorker</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#F78C6C' }}>true</span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div>

                      <div>
                        <span style={{ color: '#FFFFFF' }}>quickLearner</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#F78C6C' }}>true</span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div>

                      <div>
                        <span style={{ color: '#FFFFFF' }}>problemSolver</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#F78C6C' }}>true</span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div>

                      {/* <div>
                        <span style={{ color: '#FFFFFF' }}>yearsOfExperience</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#F78C6C' }}>4</span>
                        <span style={{ color: '#676E95' }}>,</span>
                      </div> */}

                      <div>
                        <span style={{ color: '#FFFFFF' }}>hireable</span>{' '}
                        <span style={{ color: '#89DDFF' }}>:</span>{' '}
                        <span style={{ color: '#C792EA' }}>function</span>(){' '}
                        <span style={{ color: '#A6ACCD' }}>{'{'}</span>
                      </div>

                      <div className="About-code-r1">
                        <div>
                          <span style={{ color: '#C792EA' }}>return</span>{' '}
                          <span style={{ color: '#A6ACCD' }}>{'('}</span>
                        </div>

                        <div className="About-code-r1">
                          <div>
                            <span style={{ color: '#82AAFF' }}>this</span>.
                            <span style={{ color: '#FFFFFF' }}>hardWorker</span>{' '}
                            <span style={{ color: '#89DDFF' }}>&&</span>
                          </div>
                          <div>
                            <span style={{ color: '#82AAFF' }}>this</span>.
                            <span style={{ color: '#FFFFFF' }}>problemSolver</span>{' '}
                            <span style={{ color: '#89DDFF' }}>&&</span>
                          </div>
                          <div>
                            <span style={{ color: '#82AAFF' }}>this</span>.
                            <span style={{ color: '#FFFFFF' }}>skills</span>.
                            <span style={{ color: '#82AAFF' }}>length</span>{' '}
                            <span style={{ color: '#89DDFF' }}>===</span>{' '}
                            <span style={{ color: '#F78C6C' }}>5</span>{' '}
                            <span style={{ color: '#89DDFF' }}>&&</span>
                          </div>
                          {/* <div>
                            <span style={{ color: '#82AAFF' }}>this</span>.
                            <span style={{ color: '#FFFFFF' }}>yearsOfExperience</span>{' '}
                            <span style={{ color: '#89DDFF' }}>=</span>{' '}
                            <span style={{ color: '#F78C6C' }}>3</span>
                          </div> */}
                        </div>

                        <div>
                          <span style={{ color: '#A6ACCD' }}>{');'}</span>
                        </div>
                      </div>

                      <div>
                        <span style={{ color: '#A6ACCD' }}>{'}'}</span>
                      </div>
                    </div>

                    <div>
                      <span style={{ color: '#A6ACCD' }}>{'};'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
