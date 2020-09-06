import React from "react";

import styles from "./SideScrollBar.module.scss";

export const SideScrollBar = ({ currentPage }) => {
  return (
    <aside className={styles.bulletsContainer}>
      <div className={`${styles.bulletPoint} ${currentPage >= 1 ? styles.isActive : ""}`} />
      <div className={`${styles.bulletPoint} ${currentPage >= 2 ? styles.isActive : ""}`} />
      <div className={`${styles.bulletPoint} ${currentPage >= 3 ? styles.isActive : ""}`} />
      <div className={`${styles.bulletPoint} ${currentPage >= 4 ? styles.isActive : ""}`} />
    </aside>
  );
};
