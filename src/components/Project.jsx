import React from "react";
import "./style/project.css";


function Project(props) {
  return (
    
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
          className="btn btn-repo "
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}

export default Project;