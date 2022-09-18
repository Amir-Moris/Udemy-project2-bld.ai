import React from "react";

import styles from "./PannerStyles.module.css";
import alarmimage from "./assets/clock.png";

function Panner() {
  return (
    <section className={styles.panner}>
      <div className={styles.newToUdemy}>
        <h1>New to Udemy? Lucky you.</h1>
        <p>
          Courses start at E£ 169.99. Get your new-student offer before it
          expires
        </p>
      </div>
      <div className={styles.alarm}>
        <img src={alarmimage} alt="clock" />
      </div>
    </section>
  );
}
export default Panner;
