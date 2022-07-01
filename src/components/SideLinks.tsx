import React from "react";
import styles from "../styles/SideLinks.module.scss";
import { AiOutlineMail, AiFillPhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SideLinks = () => {
  return (<>
    <div className={styles.links}>
        <a className="socialLink" href="mailto:bwoody3142@gmail.com">
            <AiOutlineMail height="2em" width="2em" />
        </a>
        <a className="socialLink" href="tel:15745280041">
            <AiFillPhone />
        </a>
        <a className="socialLink" href="https://github.com/bwoody3142">
            <AiFillGithub />
        </a>
        <a className="socialLink" href="https://www.linkedin.com/in/bryce-woody-2872481b4">
            <AiFillLinkedin />
        </a>
    </div></>
  )
};

export default SideLinks;
