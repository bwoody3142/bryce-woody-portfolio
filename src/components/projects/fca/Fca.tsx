import React from "react";
import styles from '../../../styles/projects/Fca.module.scss';
import { HiArrowNarrowRight } from 'react-icons/hi';

const technologies: Array<string> = ['React', 'React Redux', 'Node.js', 'Express.js', 'Firebase', 'Google Cloud Platform', 'Docker', 'Vimeo'];

const Fca = () => {
  return (
    <section className={styles.section}>
        <h3 className="section-title">Full Court Analytics</h3>
        <div className={styles.content}>
            <div className={styles.info}>
                <ul>
                    <li>
                        <b>Full Court Analytics</b> is an analytics platform for College, High School, and AAU basketball statstics.
                    </li>
                    <li>
                        Gained invaluable insight on building large scale projects.
                    </li>
                    <li>
                        I have went through <span className="green-text">designing</span> the product to <span className="green-text">research & development</span> of the product all the way to handling the <span className="green-text">development operations</span>. 
                    </li>
                </ul>
                <div className="tech-tags">
                    {technologies.map(tech => <span className="tech-tag" key={tech}>{tech}</span>)}
                </div>
            </div>
            <div className={styles.video}></div>
        </div>
        <a href="https://fullcourtanalytics.com" className="cool-btn flex align-center">
            See it for yourself! &nbsp;
            <HiArrowNarrowRight  />
        </a>
    </section>
  )
};

export default Fca;
