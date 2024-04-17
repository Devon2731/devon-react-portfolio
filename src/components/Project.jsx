import React from "react";
import "./style/project.css";

// Project component
function Project(props) {
  return (
    // Card container for each project
    <div className="card">
      <h5 className="card-title">{props.title}</h5>
      <a href={props.deployedLink} target="_blank" rel="noreferrer">
        <img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
      </a>
      <div className="card-body">
       
        <p className="card-text">{props.description}</p>
        <a
          href={props.deployedLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-deployed"
        >
          Deployed App
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          rel="noreferrer"
          className="btn btn-repo"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
// Export Project
export default Project;