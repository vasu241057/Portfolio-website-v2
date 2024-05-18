import React from "react";
// Import the CSS module
import { Fade } from "react-awesome-reveal";
import styles from "../components/styles/timeline.module.css"; // Assuming Timeline is a separate component
import Timeline from "./timeline";

export const WorkExperience = () => {
  return (
    <div
      className={`${styles["main-div"]} main-div`} // Combine the imported styles and regular CSS class
      id="work"
    >
      <section className={`${styles["div-2"]} ${styles.work} div-2 work`}>
        <div style={{ textAlign: "center" }}>
          <Fade direction="left" duration="1700">
            <h1>Work Experience</h1>
          </Fade>
        </div>
        <Timeline />
      </section>
    </div>
  );
};

export default WorkExperience;
