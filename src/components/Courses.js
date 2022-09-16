import React, { useState, useRef, useEffect } from "react";
import CourseContainer from "./CourseContainer";
import styles from "./Courses.module.css";

function Courses() {
  const activeTabRef = useRef();
  const [activetab, setActiveTab] = useState("Python");
  function changeActiveTab(newActiveTab) {
    activeTabRef.current.classList.remove(styles.activeTab);
    newActiveTab.currentTarget.classList.add(styles.activeTab);
    activeTabRef.current = newActiveTab.currentTarget;

    let str = activeTabRef.current.innerText;
    // let temp = "";
    // for (let i = 0; i < str.length; i++) {
    //   temp += str[i] === " " ? "_" : str[i];
    // }
    setActiveTab(str);
  }

  return (
    <section className={styles.courses}>
      <h1>A broad selection of courses</h1>
      <p>
        Choose from 204,000 online video courses with new additions published
        every month
      </p>

      {/* courses tabs */}
      <div className={styles.coursesTabs}>
        <ul>
          <li
            onClick={changeActiveTab}
            className={(styles.Python, styles.activeTab)}
            ref={activeTabRef}
          >
            Python
          </li>

          <li className={styles.Excel} onClick={changeActiveTab}>
            Excel
          </li>

          <li className={styles.Web_Development} onClick={changeActiveTab}>
            Web Development
          </li>

          <li className={styles.JavaScript} onClick={changeActiveTab}>
            JavaScript
          </li>

          <li className={styles.DataScience} onClick={changeActiveTab}>
            Data Science
          </li>

          <li className={styles.AWS_Certificate} onClick={changeActiveTab}>
            AWS Certificate
          </li>

          <li className={styles.Drawing} onClick={changeActiveTab}>
            Drawing
          </li>
        </ul>
      </div>

      {/* course Lectures */}
      <CourseContainer course={activetab}></CourseContainer>
    </section>
  );
}

export default Courses;
