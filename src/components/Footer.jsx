import "./FooterStyle.css";
import {
  FaInstagram,
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
              <p>Mumbai, India</p>
            </div>
          </div>

          <div className="phone location">
            <FaPhone
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>+91 7791932421</p>
          </div>

          <div className="email location">
            <FaMailBulk
              size={20}
              style={{ color: "white", marginRight: "2rem" }}
            />
            <p>vasu.khandelwal24@gmail.com</p>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
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

          <div className="social-icon">
            <Link to={"https://github.com/vasu241057"} target="_blank">
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/vasu-khandelwal-04b5861a1/"}
              target="_blank"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "1rem" }}
              />
            </Link>
            <Link to={"https://www.instagram.com/kh_vasu/"} target="_blank">
              <FaInstagram
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
