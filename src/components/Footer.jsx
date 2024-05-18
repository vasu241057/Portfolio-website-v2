import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Tower-2, KBS, Kallyanpur, Dhaka</p>
            </div>
          </div>

          <div className="phone location">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>+880 1625568609</p>
          </div>

          <div className="email location">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>tanvir.niter09@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
          Hello! I am a Front-End Web Developer with a keen eye for design and a passion for creating beautiful and functional websites.

          Over the past 3 months, I have been learning HTML, CSS, JavaScript, React, Bootstrap, Tailwind CSS, MUI, and other front-end web development technologies. I have completed several projects using these technologies, and I am excited to continue honing my skills and building amazing websites.

          I am also proficient in version control systems like Git and GitHub, which allows me to collaborate effectively with other developers and keep track of changes to my code.

          </p>

          <div className="social-icon">

            <Link to={"https://web.facebook.com/me.tanvir035"} target="_blank">
              <FaFacebook 
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
           
            
            <Link to={"https://github.com/tanvir35web"} target="_blank">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            

            <Link to={"https://www.linkedin.com/in/tanvir-niter09/"} target="_blank">
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
