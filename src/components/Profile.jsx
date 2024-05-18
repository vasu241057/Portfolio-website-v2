import "./ProfileStyle.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <div className="left">
          <div className="bubble"></div>
        </div>
        <div className="right">
          <h1>Vasu Khandelwal</h1>
          <p className="designation">Front-End Developer</p>
          <p className="about-text">
            Hello! I am a software developer from Jaipur, Rajasthan. During my
            college years, I started my coding journey. initially it i learnt c
            in my college, but over time, I explored front-end technologies like
            ReactJS, NextJS, Redux, HTML5, CSS/SCSS, MaterialUI, and
            TailwindCSS. I also gained expertise in back-end development with
            NodeJS, ExpressJS, NestJS, MongoDB, PostgreSQL and Redis.
            Additionally, I have a deep passion for competitive coding, which
            has honed my problem-solving abilities. Continuous learning and
            collaboration drive my development process, and I aim to deliver
            high-quality work.
          </p>
          <div className="social-icon-cv">
            <div className="cv">
              <Link
                to={"/src/assets/Vasu_Khandelwal_Resume.pdf"}
                target="_blank"
                className="submit-btn"
              >
                DOWNLOAD RESUME
              </Link>
            </div>
            <div className="social-link">
              <Link to={"https://github.com/vasu241057"} target="_blank">
                <FaGithub size={40} style={{ color: "white" }} />
              </Link>

              <Link
                to={"https://www.linkedin.com/in/vasu-khandelwal-04b5861a1/"}
                target="_blank"
              >
                <FaLinkedin size={40} style={{ color: "white" }} />
              </Link>
              <Link to={"https://www.instagram.com/kh_vasu/"} target="_blank">
                <FaInstagram size={40} style={{ color: "white" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
