import React from "react";
import styles from "./ExperienceItem.module.css";

const ExperienceItem = (props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {props.role}{" "}
        <span className={styles.company}>
          @ {props.company}
        </span>
      </h3>

      <p className={styles.duration}>
        {props.duration}
      </p>

      <ul className={styles.list}>
        {props.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceItem;
