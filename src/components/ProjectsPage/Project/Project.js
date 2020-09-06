import React from "react";

import styles from "./Project.module.scss";

export const Project = ({ project }) => {
  const renderedTechnologies = project.technologies.map((technology, idx) => (
    <img src={technology} alt="Technology icon" key={idx} className={styles.technologyIcon} />
  ));

  return (
    <div className={styles.scene}>
      <article className={styles.project}>
        <div className={styles.projectFrontFace}>
          <img src={project.image} alt={project.name} className={styles.projectImage} />

          <section className={styles.projectDetails}>
            <h3>{project.name}</h3>

            <div className={styles.technologiesContainer}>{renderedTechnologies}</div>
          </section>

          <section className={styles.mobileButtons}>
            {!project.isLive && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.sourceCodeBtn}>Source code</button>
              </a>
            )}

            {project.liveUrl !== "" && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.liveBtn}>See live</button>
              </a>
            )}
          </section>
        </div>

        <div className={styles.projectBackFace}>
          <div>
            {!project.isLive && (
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.sourceCodeBtn}>Source code</button>
              </a>
            )}

            {project.liveUrl !== "" && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <button className={styles.liveBtn}>See live</button>
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};
