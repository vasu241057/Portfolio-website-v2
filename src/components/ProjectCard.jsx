import "./ProjectCardStyle.css";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ image, alt, title, text, git, link }) => {
  return (
    <div className="projects-card">
      <div className="project-img">
        <img src={image} alt={alt} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="project-button">
        <Link to={link} target="_blank" className="project-btn">
          Live Demo
        </Link>
        <Link to={git} target="_blank" className="project-btn">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
