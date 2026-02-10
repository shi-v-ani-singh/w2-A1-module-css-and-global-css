import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./project.module.css";

const Page = () => {
  const projects = [
    {
      title: "Shopper - MERN Stack",
      tech: "MongoDB · Express · React · Node.js",
      description:
        "A full-stack e-commerce application with authentication, product management, cart and order functionality.",
    },
    {
      title: "YouTube Clone",
      tech: "React · API Integration",
      description:
        "A YouTube-like frontend application featuring video listing, playback and responsive UI.",
    },
    {
      title: "OctaNet Landing Page",
      tech: "HTML · CSS · JavaScript",
      description:
        "Frontend landing page built during a learning-based MERN internship through live lectures.",
    },
    {
      title: "Django & General Web Projects",
      tech: "Django · React · Static Websites",
      description:
        "Multiple academic and practice projects including Django apps, MERN practice projects and responsive static websites.",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={`heading ${styles.highlight}`}>Projects</h1>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tech={project.tech}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
