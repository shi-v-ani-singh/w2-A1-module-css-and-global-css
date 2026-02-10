"use client";

import Link from "next/link";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h3 className={styles.logo}>
          Shivani<span className={styles.dot}>.</span>
        </h3>

        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/experience" className={styles.navLink}>Experience</Link>
          <Link href="/project" className={styles.navLink}>Projects</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </div>

        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
