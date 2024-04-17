import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./styles/footer.css";

const socials = [
  {
    name: "GitHub",
    link: "https://github.com/Devon2731",
    icon: faGithub,
    color: "#5DE12"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/devon-whitaker-78895a275/",
    icon: faLinkedin,
    color: "#2EACE8",
    
    
    
    
  },
];

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white mt-5">
      <div className="container">
        <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
          {socials.map(({ name, link, icon, color }) => (
            <div
              key={name}
              className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
            >
              <a
                href={link}  
                className={`icon ${name}`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={icon}
                  bounce
                  className="footer-icon-size " 
                  style={{ color: color }}
                />
              </a>
              <a href={link} target="_blank" rel="noreferrer">
                <span className="d-inline-block mx-1 name text-white">{name}</span>
              </a>
            </div>
          ))}
        </section>
        <section className="form-footer">
          <h5 className="designer-text text-white">Designed with by Devon Whitaker 😎</h5>
          <p>
            <span className="copyright-text text-white">&copy; {new Date().getFullYear()} All rights reserved.</span>
          </p>
        </section>
      </div>
    </footer>
  );
};
// Export Footer
export default Footer;
