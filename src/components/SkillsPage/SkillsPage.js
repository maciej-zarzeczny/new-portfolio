import React from "react";
import { Link } from "react-scroll";

import styles from "./SkillsPage.module.scss";
import { SkillsCard } from "./SkillsCard/SkillsCard";

import { BiCodeCurly } from "react-icons/bi";
import { FaMobileAlt, FaDatabase } from "react-icons/fa";

export const SkillsPage = () => {
  const frontendSkills = ["HTML", "CSS", "SASS", "JavaScript", "React", "Redux"];
  const mobileSkills = ["Flutter", "Firebase"];
  const backendSkills = ["PHP", "Python", "Laravel", "MySQL"];

  return (
    <section className={styles.page} name="skills-page">
      <div className={`${styles.pageContent} container`}>
        <section className={styles.skills}>
          <SkillsCard
            title="Frontend"
            icon={<BiCodeCurly />}
            skills={frontendSkills}
            active={true}
          />
          <SkillsCard title="Mobile" icon={<FaMobileAlt />} skills={mobileSkills} />
          <SkillsCard title="Backend" icon={<FaDatabase />} skills={backendSkills} />
        </section>

        <section className={styles.introduction}>
          <header>
            <p className={styles.subtitle}>Introduction</p>
            <h1 className={styles.title}>
              Hello! I'm Maciej <br /> Zarzeczny
            </h1>
          </header>

          <p className={styles.content}>
            I started programming 5 years ago. At first I was developing native mobile applications
            and games for Android and iOS platforms. Then I started shifting towards web
            development. During first years of my web developer career I was working on several
            projects as a Fullstack developer. right now I’m focusing solely on Frontend development
            with React, however I believe that my backend experience is a big advantage when
            cooperating with other backend developers on a project. Now I’m also developing hybrid
            mobile applications for both Android and iOS using Flutter.
            <br />
            <br />
            During my career I developed several mobile applications and websites for clients as a
            freelancer, but I am also constantly improving my skills by creating my own projects.
            For a year and 8 months I was working as a software developer at Vendim company where I
            was responsible for developing UI’s and REST API’s for modern vending machines.
          </p>

          <Link to="projects" smooth={true} duration={500} offset={-100}>
            <button className={styles.seeProjectsBtn}>See projects</button>
          </Link>
        </section>
      </div>
    </section>
  );
};
