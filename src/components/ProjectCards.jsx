import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectCardData } from "./Data";

const ProjectCards = () => {
  return (
    <div className="project">
      <h1 className="project-heading">RECENT PROJECTS</h1>
      <div className="project-container">
        {ProjectCardData.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            alt={item.alt}
            title={item.title}
            text={item.text}
            git={item.git}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
