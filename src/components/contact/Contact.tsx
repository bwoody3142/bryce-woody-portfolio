import { TextField } from "@mui/material";
import React, { useState } from "react";
import styles from '../../styles/contact/Contact.module.scss';
import { AiOutlineMail, AiFillPhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import Emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    async function sendMessage(){
        console.log({ name, company, message });
        Emailjs.send(
            String(process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID),
            String(process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID),
            { name, company, message },
            String(process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID)
          )
          .then((response) => {
            if (response.status === 200) toast.success('Message Sent!', { theme: 'colored' });
          })
          .catch((error) => {
            toast.error('Message was not sent please try again.', { theme: 'colored' });
          });
    }
    
    return (
        <section id="contact" className={styles.section}>
            <h2 className="section-title">Contact Me!</h2>
            <div className="flex gap-10 w-100">
                <form className={styles.form}>
                    <TextField onChange={(e) => setName(e.target.value)} label="Your Name" variant="outlined" fullWidth />
                    <TextField onChange={(e) => setCompany(e.target.value)} label="Company Name" variant="outlined" fullWidth />
                    <TextField onChange={(e) => setMessage(e.target.value)} label="Message" multiline variant="outlined" fullWidth InputProps={{ rows: 7 }} />
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
                        <a className={styles.socialLink} href="https://github.com/bwoody3142" target="_blank" rel="noreferrer">
                            My GitHub Profile
                        </a>
                    </div>
                    <div className={styles.link}>
                        <AiFillLinkedin color="var(--green)" />
                        <a className={styles.socialLink} href="https://www.linkedin.com/in/bryce-woody-2872481b4" target="_blank" rel="noreferrer">
                            My LinkedIn Profile
                        </a>
                    </div>
                </div>
            </div>
            <button className="cool-btn send-message-btn" onClick={sendMessage}>
                Send Message
            </button>
        </section>
    )
}

export default Contact;
