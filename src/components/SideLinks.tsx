import React from "react";
import styles from "../styles/SideLinks.module.scss";
import { AiOutlineMail, AiFillPhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const SideLinks = () => {
  return (<>
    <div className={styles.links}>
        <a className="has-tooltip" data-tooltip="Email Me @ bwoody3142@gmail.com" href="mailto:bwoody3142@gmail.com">
            <AiOutlineMail height="2em" width="2em" />
        </a>
        <a className="has-tooltip" data-tooltip="Call or Text (574) 528 - 0041" href="tel:15745280041">
            <AiFillPhone />
        </a>
        <a className="has-tooltip" data-tooltip="GitHub" href="https://github.com/bwoody3142">
            <AiFillGithub />
        </a>
        <a className="has-tooltip" data-tooltip="LinkedIn" href="https://www.linkedin.com/in/bryce-woody-2872481b4">
            <AiFillLinkedin />
        </a>
    </div></>
  )
};

export default SideLinks;
