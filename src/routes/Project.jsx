import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroAll from "../components/HeroAll";
import PricingCards from "../components/PricingCards";
import ProjectCards from "../components/ProjectCards";

const Project = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"PROJECTS"} text={"Some of my recent projects"} />
      <ProjectCards/>
      <PricingCards/>
      <Footer />
    </>
  );
};

export default Project;
