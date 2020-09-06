import React from "react";

import styles from "./SkillsCard.module.scss";

export const SkillsCard = ({ title, icon, skills, active }) => {
  const renderedSkills = skills.map((skill, idx) => (
    <div className={styles.skill} key={idx}>
      {skill}
    </div>
  ));

  return (
    <article className={styles.skillsCard}>
      <header className={active ? styles.isActive : ""}>
        <h3 className={active ? styles.isActive : ""}>{title}</h3>
        {icon}
      </header>

      <section className={styles.skillsContainer}>{renderedSkills}</section>
    </article>
  );
};
