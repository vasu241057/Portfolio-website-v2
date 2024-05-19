import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProjectCards from "../components/ProjectCards";
import Profile from "../components/Profile";
import Skills from "../components/skills/Skills";
import WorkExperience from "../components/work-Ex";
import Loader, { loadingListener } from "../components/loader";

// import SkillsProgress from '../components/SkillsProgress'

const Home = () => {
  useEffect(() => {
    loadingListener();
  }, []);
  return (
    <>
      <div>
        <Loader />
        <NavBar />
        <Hero />
        <Profile />
        {/* <SkillsProgress/> */}
        <Skills />
        <WorkExperience />
        <ProjectCards />
        <Footer />
      </div>
    </>
  );
};

export default Home;
