import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-main-title">Contact Me</h1>
      <div className="contact-wrapper-box">
        <Row className="contact-wrapper align-items-center">
          <Col xs={12} md={6}>
            <div className="contact-left">
              <h2 className="contact-title">Get in Touch</h2>
              <p className="contact-subtitle">
                Have a question or want to work together? Drop us a message!
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <div className="icon-box">✉️</div>
                  <div>
                    <h4>Email</h4>
                    <p>dheepakselvakumar38@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="icon-box">
                    <div className="icon-box" onClick={() =>
                      window.open(
                        "https://www.google.com/maps?q=Dharapuram,Tirupur",
                        "_blank"
                      )
                    }
                      style={{ cursor: "pointer" }}
                    >
                      📍
                    </div>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Dharapuram, Tirupur</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT FORM */}
          <Col xs={12} md={6}>
            <div className="contact-right">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Your Message"></textarea>

              <button>
                Send Message <span>➤</span>
              </button>
            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
};

export default Contact;
