import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* Left */}
        <div className={styles.left}>
          <h3 className={styles.name}>
            Shivani<span className={styles.dot}>.</span>
          </h3>
          <p className={styles.description}>
            Building clean, scalable web experiences with modern tech.
          </p>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <a
            href="https://github.com/"
            target="_blank"
            className={styles.icon}
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className={styles.icon}
            rel="noopener noreferrer"
          >
            <GrLinkedinOption />
          </a>
          <a
            href="mailto:sivi0899@gmail.com"
            className={styles.icon}
          >
            <SiGmail />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Shivani. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
