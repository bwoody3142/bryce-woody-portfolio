import React from "react";
import { JobType } from "../../interfaces/experience/ExperienceInterfaces";
import styles from '../../styles/experience/Job.module.scss';

type Props = {
    data: JobType;
    show: boolean;
};

const Job = ({ data, show }: Props) => {
  return (
    <div className={`flex-col gap-3 ${show ? '' : 'hidden'}`}>
        <div className={styles.summary}>
            <span className={styles.summaryText}>{data.summary.text}</span>
            <div className="tech-tags">
                {data.summary.tags.map(tag => (
                    <span className="tech-tag" key={tag}>{tag}</span>
                ))}
            </div>
        </div>
        <ul className={styles.bullets}>
            {data.bullets.map(bullet => (
                <div className="flex flex-wrap gap-2" key={bullet.text}>
                    <li>{bullet.text}</li>
                    {bullet.tags.map(tag => <div className="tech-tag" key={tag}>{tag}</div>)}
                </div>
            ))}
        </ul>
    </div>
  )
};

export default Job;
