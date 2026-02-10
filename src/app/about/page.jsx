import React from 'react';
import styles from './about.module.css';

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={`heading ${styles.highlight}`}>About Me</h1>

      <p className={styles.paragraph}>
        Computer Science Engineering graduate from Radha Govind Group Of Institutions, Meerut (AKTU).
        Full-Stack Developer and technology enthusiast.
      </p>

      <div>
        <h2 className={styles.subHeading}>Domains of Interest</h2>
        <ul className={styles.list}>
          <li>Full-Stack Development</li>
          <li>AI / ML</li>
          <li>Agentic AI</li>
        </ul>
      </div>

      <div>
        <h2 className={styles.subHeading}>Skills</h2>
        <p className={styles.paragraph}>
          HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,
          Node.js, Express, MongoDB, Django, REST APIs
        </p>
      </div>
    </div>
  );
};

export default Page;
