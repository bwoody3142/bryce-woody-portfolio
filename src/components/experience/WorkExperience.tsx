import React, { useState } from "react";
import { JobType } from "../../interfaces/experience/ExperienceInterfaces";
import Job from "./Job";
import styles from '../../styles/experience/Experience.module.scss';
import cx from 'classnames';

const jobs: Array<JobType> = [
    { // EMI
        summary: {
            text: "Platform for Provisioning and Synchronizing Network Elements for 911 ESInet's.",
            tags: ['Angular.js', 'Express.js']
        },
        bullets: [
            {
                text: "Work closely with stakeholders to push new features & fix bugs. (Supported 50+ Network Element releases)",
                tags: []
            },
            {
                text: "Create sibling application to control Call Routing & Logic.",
                tags: ['React']
            },
            {
                text: "Create configuration tool that lets users manage Call Queues in a simple way. ",
                tags: ['React', 'TypeScript']
            },
            {
                text: "Create desktop application to allow users to perform actions in & configure Call Policy Routing Rules.",
                tags: ['React', 'Electron', 'Express.js']
            }
        ]
    },
    { // AAA
        summary: {
            text: "Implementing Authentication & Authorization solution meant police all INdigital products.",
            tags: ['Keycloak', 'Golang', 'PostgreSQL']
        },
        bullets: [
            {
                text: "Created React App for admins to manage users across all products, to complement this solution.",
                tags: ['React', 'TypeScript']
            }
        ]
    },
    { // Texty
        summary: {
            text: "Platform for Text To & From 911 Public Safety Answering Points.",
            tags: ['jQuery', 'Node.js', 'Express.js']
        },
        bullets: [
            {
                text: "Work closely with stakeholders to push new features & fix bugs.",
                tags: []
            },
            {
                text: "Improved infrastructure by reducing redundant code & abstracting more reusable code.",
                tags: []
            },
        ]
    },
]

const WorkExperience = () => {

    const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className={styles.section}>
        <h3 className="section-title">Work Experience</h3>
        <div className="flex-col">
            <h3 className={styles.jobTitle}>INdigital Telecom - <span>Full Stack Software Engineer</span></h3>
            <span className={styles.jobInfo}>2020 - Present | Agile Methodology | Remote</span>
        </div>
        <div className={styles.projectTabs}>
            <div className={cx(styles.tab, activeIdx === 0 ? styles.active : '')} onClick={() => setActiveIdx(0)}>EMI</div>
            <div className={cx(styles.tab, activeIdx === 1 ? styles.active : '')} onClick={() => setActiveIdx(1)}>AAA</div>
            <div className={cx(styles.tab, activeIdx === 2 ? styles.active : '')} onClick={() => setActiveIdx(2)}>Texty</div>
        </div>
        {jobs.map((job, idx) => <Job key={idx} data={job} show={idx === activeIdx} />)}
    </section>
  )
};

export default WorkExperience;
