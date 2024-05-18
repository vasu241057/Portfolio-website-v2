import "./HeroAllStyle.css";
import React from "react";

const HeroAll = ({ heading, text }) => {
  return (
    <div className="heroAll-img">
      <div className="heading">
        <h1>{heading}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default HeroAll;
