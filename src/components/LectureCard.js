import React from "react";
import styles from "./courseStyles.module.css";

function LectureCard(props) {
  let myrating = "";
  for (let i = 1, rating = props.ratingRatio; i <= 5; i++, rating--) {
    myrating += "⭐";
  }
  let card = (
    <div className={styles.card_container}>
      <div className={styles.lecture_card}>
        <div className={styles.course_img}>
          <img src={props.src} alt={"Python course"}></img>
        </div>
        <h6 className={styles.title}>{props.title}</h6>
        <p className={styles.author}>{props.author}</p>
        <div className={styles.rating}>
          <span className={styles.checked}>{props.ratingRatio + myrating}</span>
          <label>{"(" + props.ratings + ")"}</label>
        </div>
        <div className={styles.price}>
          <span className={styles.real_price}>{"E£ " + props.price}</span>
          <del>{"E£ " + props.beforeOffer}</del>
        </div>
      </div>
    </div>
  );

  return card;
}
export default LectureCard;
