import React, { useState, useEffect, useCallback } from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-scroll";

import styles from "./Navbar.module.scss";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdHome, MdReorder, MdWork, MdPerson } from "react-icons/md";

export const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY < 100) {
      if (isMinimized) setIsMinimized(false);
    } else {
      if (!isMinimized) setIsMinimized(true);
    }
  }, [isMinimized]);

  // Handle navbar minimize
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`${styles.navWrapper} ${isMinimized ? styles.isMinimized : ""}`}>
      <div className={`${styles.navContent} container`}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <MdHome className={styles.menuItemIcon} />
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.link}
              activeClass={styles.isActive}
            >
              About
            </Link>
          </li>
          <li className={styles.menuItem}>
            <MdReorder className={styles.menuItemIcon} />
            <Link
              to="skills-page"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.link}
              activeClass={styles.isActive}
            >
              Skills
            </Link>
          </li>
          <li className={styles.menuItem}>
            <MdWork className={styles.menuItemIcon} />
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.link}
              activeClass={styles.isActive}
            >
              Projects
            </Link>
          </li>
          <li className={styles.menuItem}>
            <MdPerson className={styles.menuItemIcon} />
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={styles.link}
              activeClass={styles.isActive}
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className={styles.socialMenu}>
          <li className={`${styles.iconItem}`} data-tip="Github">
            <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <ReactTooltip place="bottom" effect="solid" />
          </li>
          <li className={`${styles.iconItem}`} data-tip="Linkedin">
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
