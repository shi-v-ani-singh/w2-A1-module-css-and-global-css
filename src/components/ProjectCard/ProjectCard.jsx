import React from "react";
import styles from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.tech}>{props.tech}</p>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default ProjectCard;
