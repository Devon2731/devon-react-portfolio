import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/resume.css";
import PDF from "../Document/Resume (1).pdf"

// Resume component
function Resume() {
  return (
    <div className="d-flex flex-column container">
    <h1 className="text-white mt-5 p-2 relative shadow-lg text-center flex-grow-1 position-sticky">Resume</h1>
    {/* <Card id="resume" className="resume-margin"> */}
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <hr className="star-primary" />
            <Button variant="light" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col id="technical-skills">
            <h3>Technical Skills</h3>
            <hr className="star-secondary" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <strong>Languages:</strong> JavaScript, HTML, CSS
              </li>
              <li className="list-inline-item">
                <strong>Libraries/Frameworks:</strong> React, jQuery, Bootstrap,
                
              </li>
              <li className="list-inline-item">
                <strong>Databases:</strong> MongoDB and MySQL
              </li>
              <li className="list-inline-item">
                <strong>Tools/Platforms:</strong> Git, GitHub, Heroku,
                Netlify
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col id="proficiencies">
            <h3>Proficiencies</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="">M</span>
                ongoDB
              </li>
              <li className="flex items-center">
                <span className="teal-color">E</span>xpress
              </li>
              <li>
                <span className="teal-color">R</span>eact
              </li>
              <li>
                <span className="teal-color">N</span>ode.js
              </li>
              <li>SQL</li>
            </ul>
          </Col>
        </Row>
      </Container>
    {/* </Card> */}
    </div>
  );
}
// Export Resume
export default Resume;