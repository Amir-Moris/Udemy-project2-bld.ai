import React from "react";
import { Route, useParams, Link } from "react-router-dom";
import styles from "./courseStyles.module.css";

function LectureCard(props) {
  let myrating = "";
  for (let i = 1; i <= 5; i++) {
    myrating += "⭐";
  }

  return (
    <Link
      to={"/" + props.category + "/:" + props.card["id"]}
      className={styles.lecture_card}
    >
      <div className={styles.course_img}>
        <img src={props.card["image"]} alt={props.category + " course"}></img>
      </div>
      <h6 className={styles.title}>{props.card["title"]}</h6>
      <p className={styles.author}>{props.card["author"]}</p>
      <div className={styles.rating}>
        <span className={styles.checked}>
          {props.card["rating"]["score"] + myrating}
        </span>
        <label>{"(" + props.card["rating"]["reviews"] + ")"}</label>
      </div>
      <div className={styles.price}>
        <span className={styles.real_price}>{"E£ " + props.card["price"]}</span>
        <del>{"E£ " + "699.199"}</del>
      </div>
    </Link>
  );
}
export default LectureCard;
