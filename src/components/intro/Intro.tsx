import React from "react";
import styles from '../../styles/intro/Intro.module.scss';

const Intro = () => {
    return (
        <section className="gap-2">
            <h2 className={styles.name}>Bryce Woody</h2>
            <h4 className={styles.jobTitle}>Full Stack Software Engineer</h4>
            <span className={styles.summary}>I am a software engineer, passionate for new technologies and eager to learn and evolve.  </span>
        </section>   
    )
};

export default Intro;
