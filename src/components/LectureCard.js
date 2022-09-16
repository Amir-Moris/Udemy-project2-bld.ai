import React from "react";
import styles from "./courseStyles.module.css";

function LectureCard(props) {
  let myrating = "";
  for (let i = 1; i <= 5; i++) {
    myrating += "⭐";
  }
  return (
    <div className={styles.lecture_card}>
      <div className={styles.course_img}>
        <img src={props.card["image"]} alt={"Python course"}></img>
      </div>
      <h6 className={styles.title}>{props.card["title"]}</h6>
      <p className={styles.author}>{props.card["instructor"]["name"]}</p>
      <div className={styles.rating}>
        <span className={styles.checked}>
          {props.card["rating"]["average"] + myrating}
        </span>
        <label>{"(" + props.card["numberOfRatings"] + ")"}</label>
      </div>
      <div className={styles.price}>
        <span className={styles.real_price}>{"E£ " + props.card["price"]}</span>
        <del>{"E£ " + "699.199"}</del>
      </div>
    </div>
  );
}
export default LectureCard;
