import { TextField } from "@mui/material";
import React from "react";
import styles from '../../styles/contact/Contact.module.scss';
import { AiOutlineMail, AiFillPhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
    return (
        <section className={styles.section}>
            <h2 className="section-title">Contact Me!</h2>
            <div className="flex gap-10 w-100">
                <form className={styles.form}>
                    <TextField label="Your Name" variant="outlined" fullWidth />
                    <TextField label="Company Name" variant="outlined" fullWidth />
                    <TextField label="Message" multiline variant="outlined" fullWidth InputProps={{ rows: 7 }} />
                </form>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <AiOutlineMail color="var(--green)" />
                        <a className={styles.socialLink} href="mailto:bwoody3142@gmail.com">bwoody3142@gmail.com</a>
                    </div>
                    <div className={styles.link}>
                        <AiFillPhone color="var(--green)" />
                        <a className={styles.socialLink} href="tel:+15745280041">+1 (574) 528 - 0041</a>
                    </div>
                    <div className={styles.link}>
                        <AiFillGithub color="var(--green)" />
                        <a className={styles.socialLink} href="https://github.com/bwoody3142" target="_blank">
                            My GitHub Profile
                        </a>
                    </div>
                    <div className={styles.link}>
                        <AiFillLinkedin color="var(--green)" />
                        <a className={styles.socialLink} href="https://www.linkedin.com/in/bryce-woody-2872481b4" target="_blank">
                            My LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
