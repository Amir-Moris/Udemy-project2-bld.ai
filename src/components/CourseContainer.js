import React, { useState, useEffect } from "react";

import styles from "./courseStyles.module.css";
import LectureCard from "./LectureCard";
import LoadingSpinner from "./LoadingSpinner";

function CourseContainer(props) {
  // fetch courses
  const [data, updateData] = useState(null);
  const [isLoading, updateIsLoading] = useState(true);
  const [Error, updateError] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/" + props.courseName)
      .then(async (response) => await response.json())
      .then((myData) => {
        updateIsLoading(false);
        updateData(myData);
      })
      .catch(() => {
        updateError(true);
        updateData(null);
      });
  }, [props.courseName]);
  // failed to load courses
  if (data === null) return;

  return (
    (Error && <div>Failed to load course please try again</div>) || (
      <section className={styles.course_content}>
        <div className={styles.description}>
          <h2>{data["title"]}</h2>
          <p>{data["description"]}</p>
          <a href={"#"}>{"Explore " + data["name"]}</a>
        </div>

        <div className={styles.carousel_container}>
          <div className={styles.carousel_inner}>
            <div className={styles.track}>
              {(isLoading && <LoadingSpinner full={isLoading} />) ||
                createLecture(data["courses"])}
            </div>
          </div>
        </div>
      </section>
    )
  );
  function createLecture(dataArr) {
    if (isLoading) console.log("asd");
    return dataArr.map((item) => (
      <LectureCard
        key={item["id"]}
        card={item}
        category={props.courseName}
      ></LectureCard>
    ));
  }
}

export default CourseContainer;
