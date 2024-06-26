import { useState, useRef, React } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/contact.css";
import emailjs from '@emailjs/browser';

function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);


  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError(false);
  };

  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(false);
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
    setMessageError(false);
  };


  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

  
    if (name.length <= 5) {
      setNameError(true);
      valid = false;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      valid = false;
    }
    if (message.length < 1) {
      setMessageError(true);
      valid = false;
    }

    
    if (valid) {
      console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
      setName("");
      setEmail("");
      setMessage("");
      setMessageSent(true)
      sendEmail(e);
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="text-white text-left m-3 p-2 relative shadow-lg text-center flex-grow-1 position-sticky">Contact Me</h2>
            {messageSent && (
              <div className="alert alert-success" role="alert">
                Your message has been sent successfully!
              </div>
            )}
            <Form ref={form} onSubmit={handleSubmit} noValidate>
              <Form.Group>
                <Form.Label htmlFor="name">Name:</Form.Label>
                <Form.Control 
                  type="text"
                  className={nameError ? "is-invalid" : ""}
                  id="name"
                  name="user_name"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
                {nameError && (
                  <div className="invalid-feedback">
                    Name must be more than 5 characters
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">Email:</Form.Label>
                <Form.Control
                  type="email"
                  className={emailError ? "is-invalid" : ""}
                  id="email"
                  name="user_email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && (
                  <div className="invalid-feedback">
                    A valid email is required
                  </div>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="message">Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  className={messageError ? "is-invalid" : ""}
                  id="message"
                  name="user_message"
                  rows="5"
                  value={message}
                  onChange={handleMsgChange}
                />
                {messageError && (
                  <div className="invalid-feedback">
                    Message must be at least 150 characters
                  </div>
                )}
              </Form.Group>
              <Button link= "mailto:devon.whitaker27@gmail.com" type="submit" className="custom-send-message-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Contact
export default Contact;