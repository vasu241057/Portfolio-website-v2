import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroAll from "../components/HeroAll";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <NavBar />
      <HeroAll heading={"CONTACT"} text={"Hello, Let's have a chat"} />
      <Form/>
      <Footer />
    </>
  );
};

export default Contact;
