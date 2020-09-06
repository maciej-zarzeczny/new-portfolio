import React from "react";

import styles from "./BottomBar.module.scss";

export const BottomBar = () => {
  return (
    <section className={`${styles.bottomBar}`}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.infoNumber}>2+</h1>
        <p className={styles.infoText}>
          Years of <br /> experience
        </p>
      </div>

      <div className={styles.infoWrapper}>
        <h1 className={styles.infoNumber}>10+</h1>
        <p className={styles.infoText}>
          Projects <br /> made
        </p>
      </div>
    </section>
  );
};
