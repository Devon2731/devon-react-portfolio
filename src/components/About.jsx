import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../assets/IMG_3204.JPG";
import "./styles/about.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <Container>
      <h1 className="about-heading text-white mb-5 p-2 relative shadow-lg text-center flex-grow-1 position-sticky">About Me</h1>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About: Devon Whitaker
                </Card.Title>
                <Card.Text>
                  As a man of ambition and determination, I'm always  looking for the right job that fits me for years.I stubbled on the path to becoming a full-stack developer. My journey as a full-stack developer began with a curiosity for technology and a drive to learn. Coding fascinated me from the start, with its ability to turn ideas into reality and solve problems creatively.

                  Despite facing challenges and moments of uncertainty, I'm persisted, dedicating countless hours to mastering programming languages, frameworks, and technologies across the development stack.

                  Beyond technical skills, I cultivated a mindset of innovation and collaboration, seeking out opportunities to learn from others and embracing feedback as a means to grow.

                  Today, I see my role not just as a developer, but as an inspiration to others. Through my work, I aim to push boundaries and make a meaningful impact, while also encouraging others to pursue their own paths in technology.

                  In this ever-changing field, it's not just about the code we write—it's about the journey we take and the people we inspire along the way. And I'm committed to being a guiding light for others as they navigate their own paths in the world of development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
