import React from "react";
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
        <div className={styles.brand}>BW</div>
        <div className={styles.links}>
            <div className={styles.link}>Projects</div>
            <div className={styles.link}>Experience</div>
            <div className={styles.link}>Contact</div>
            <div className={styles.resumeLink}>Resume</div>
        </div>
    </nav>
  )
};

export default Header;
