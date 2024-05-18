import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroAll from "../components/HeroAll";
import AboutMe from "../components/AboutMe";
import Skills from "../components/skills/Skills";

const About = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"ABOUT"} text={"I'm a Front-End Developer"} />
      <AboutMe/>
      <Skills/>
      <Footer />
    </>
  );
};

export default About;
