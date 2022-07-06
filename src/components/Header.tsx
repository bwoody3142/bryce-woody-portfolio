import React from "react";
import styles from '../styles/Header.module.scss';

const Header = () => {

  return (
    <nav className={styles.header}>
        <div className={styles.brand}>BW</div>
        <div className={styles.links}>
            <a href="#intro" className={styles.link}>Introduction</a>
            <a href="#projects" className={styles.link}>Projects</a>
            <a href="#experience" className={styles.link}>Experience</a>
            <a href="#contact" className={styles.link}>Contact</a>
            {/* <a href="../public/pdf/resume.pdf" target="_blank" rel="noreferrer" className="cool-btn">Resume</a> */}
        </div>
    </nav>
  )
};

export default Header;
