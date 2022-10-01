import React from "react";
import { Link } from "react-router-dom";

import styles from "./courseStyles.module.css";

function LectureCard(props) {
  // stars rating
  const starsRating = (ratingRatio) => {
    const stars = [];
    for (let i = 1, score = ratingRatio; i <= 5; i++, score--) {
      if (score >= 1) {
        stars.push(
          <span
            className="bi bi-star-fill "
            style={{ color: "orange" }}
            key={i}
          ></span>
        );
      } else if (score > 0) {
        stars.push(
          <span
            className="bi bi-star-half"
            style={{ color: "orange" }}
            key={i}
          ></span>
        );
      } else {
        stars.push(
          <span
            className="bi bi-star"
            style={{ color: "orange" }}
            key={i}
          ></span>
        );
      }
    }
    return (
      <span>
        <span className="me-1" style={{ color: "#b4690e" }}>
          {ratingRatio}
        </span>
        <span>{stars}</span>
      </span>
    );
  };

  return (
    <Link
      to={"/" + props.category + "/:" + props.card["id"]}
      className={styles.lecture_card}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className={styles.course_img}>
        <img src={props.card["image"]} alt={props.category + " course"}></img>
      </div>
      <h6 className={styles.title}>{props.card["title"]}</h6>
      <p className={styles.author}>{props.card["author"]}</p>
      <div className={styles.rating}>
        <span className={styles.checked}>
          {starsRating(props.card["rating"]["score"])}
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
