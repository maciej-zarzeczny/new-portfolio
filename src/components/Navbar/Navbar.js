import React from "react";
import ReactTooltip from "react-tooltip";

import styles from "./Navbar.module.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={`${styles.navContent} container`}>
        <ul className={styles.leftItems}>
          <li className={`${styles.menuItem} ${styles.isActive}`}>About</li>
          <li className={styles.menuItem}>Skills</li>
          <li className={styles.menuItem}>Projects</li>
          <li className={styles.menuItem}>Contact</li>
        </ul>

        <ul className={styles.rightItems}>
          <li className={`${styles.menuItem} ${styles.iconItem}`} data-tip="Github">
            <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <ReactTooltip place="bottom" effect="solid" />
          </li>
          <li className={`${styles.menuItem} ${styles.iconItem}`} data-tip="Linkedin">
            <a
              href="https://www.linkedin.com/in/maciej-zarzeczny-03636918b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <ReactTooltip place="bottom" effect="solid" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
