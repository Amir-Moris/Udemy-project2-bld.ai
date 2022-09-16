import React, { useState } from "react";
import LectureCard from "./LectureCard";
import styles from "./courseStyles.module.css";

function CourseContainer(props) {
  if (props.course === null) return;
  const course = props.course;
  const cards = course["courses"].map((val) => (
    <LectureCard key={val["id"]} card={val}></LectureCard>
  ));

  return (
    <section className={styles.course_content}>
      <div className={styles.description}>
        <h2>{course["title"]}</h2>
        <p>{course["description"]}</p>
        <a href={"#"}>{"Explore " + props.explore}</a>
      </div>

      <div className={styles.carousel_container}>
        <div className={styles.carousel_inner}>
          <div className={styles.track}>{cards}</div>
        </div>
      </div>
    </section>
  );
}

export default CourseContainer;
