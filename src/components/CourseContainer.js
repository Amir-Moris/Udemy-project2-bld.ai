import React from "react";
import LectureCard from "./LectureCard";
import styles from "./courseStyles.module.css";

import img1 from "./assets/courses/python0.png";
function CourseContainer(props) {
  let course = (
    <section className={styles.course_content}>
      <div className={styles.description}>
        <h2>{props.header}</h2>
        <p>{props.details}</p>
        <a href={"#"}>{"Explore " + props.explore}</a>
      </div>

      <div className={styles.carousel_container}>
        <div className={styles.carousel_inner}>
          <div className={styles.track}>
            <LectureCard
              src={img1}
              title={"Learn Python: The Complete Python Programming Course"}
              author={"Avinash Jain, The Codex"}
              ratingRatio={"4.4"}
              ratings={"3,116"}
              price={"149.99"}
              beforeOffer={"679.99"}
            ></LectureCard>

            <LectureCard
              src={img1}
              title={"Learn Python: The Complete Python Programming Course"}
              author={"Avinash Jain, The Codex"}
              ratingRatio={"4.4"}
              ratings={"3,116"}
              price={"149.99"}
              beforeOffer={"679.99"}
            ></LectureCard>

            <LectureCard
              src={img1}
              title={"Learn Python: The Complete Python Programming Course"}
              author={"Avinash Jain, The Codex"}
              ratingRatio={"4.4"}
              ratings={"3,116"}
              price={"149.99"}
              beforeOffer={"679.99"}
            ></LectureCard>
          </div>
        </div>
      </div>
    </section>
  );

  return course;
}
export default CourseContainer;
