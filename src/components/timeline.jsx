import { data } from "./work";
// import WorkIcon from "@material-ui/icons/Work";
import { Fade } from "react-awesome-reveal";
import { MdWork } from "react-icons/md";
import styles from "../components/styles/timeline.module.css"; // Update the import statement

const Timeline = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1">
        <div className="col-span-1">
          <Fade direction="left" duration="1700">
            <ul className={styles.timeline}>
              {data.map((item) => {
                return (
                  <li className={`${styles["timeline-item"]}`} key={item.id}>
                    {" "}
                    {/* Use template literals to access classes */}
                    <div
                      className={`${styles["timeline-badge"]} flex items-center`}
                    >
                      <MdWork />
                    </div>
                    <div className={styles["timeline-panel"]}>
                      <div className={styles["timeline-heading"]}>
                        <div
                          className={`${styles["timeline-heading-div"]} flex items-center`}
                        >
                          <h4 className={styles["timeline-title"]}>
                            {item.company}
                          </h4>
                          <span> | </span>
                          <p
                            style={{
                              fontSize: "17px",
                              opacity: "0.4",
                              textAlign: "justify",
                            }}
                            className="ml-2"
                          >
                            {item.date}
                          </p>
                        </div>
                        <p className={styles.text}>{item.role}</p>
                      </div>
                      <div className={styles["timeline-body"]}>
                        <p>{item.text}</p>
                        <p>{item.text2}</p>
                        <p>{item.text3}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
