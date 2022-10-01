import React, { useState } from "react";

import styles from "./CourseAboutPage.module.css";

function Reviews(props) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  console.log(liked);
  const like = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };
  const dislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };
  const ReviewCardRating = ({ rating }) => {
    const ratingRatio = rating;
    const stars = [];

    // stars rating
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
  const reviews = props.reviews;
  const ReviewCard = ({ review }) => {
    const userName = review["user"].split(" ");
    const initials =
      userName.length === 1 ? userName[0][0] : userName[0][0] + userName[1][0];
    return (
      <>
        <header className="d-flex align-items-center align-content-center border-1 border-top pt-4 pb-2 justify-content-sm-between">
          <span>
            <span
              className={`me-1 bg-dark text-white d-flex justify-content-center align-items-center fs-6 rounded-circle ${styles.initials}`}
            >
              {initials}
            </span>
            <span className="ms-0 fs-6 d-flex flex-column justify-content-between align-content-center">
              <div className="fw-bolder">{userName}</div>
              <div>
                {/* rating */}
                <ReviewCardRating rating={review["stars"]} />
                <span className={`ms-1 fw-bold ${styles.date}`}>
                  {review["date"]}
                </span>
              </div>
            </span>
          </span>
          {/* buttons */}
          <span
            className={`d-flex justify-content-start align-items-center gap-3 ${styles.feedback}`}
          >
            <span>Helpful?</span>
            <i
              onClick={like}
              className={`fa-${
                liked ? "solid" : "regular"
              } fa-thumbs-up fs-3 me-2 ${styles.feedback}`}
            ></i>
            <i
              onClick={dislike}
              className={`fa-${
                disliked ? "solid" : "regular"
              } fa-thumbs-down fs-3 ${styles.mirror}`}
            ></i>
          </span>
        </header>
        {/* content */}
        <p className={styles.content}>{review["content"]}</p>
      </>
    );
  };
  return (
    <>
      <h1 className="fs-4 fw-bold">
        <span className={styles.star}>
          <i className="fa-solid fa-star me-2"></i>
        </span>
        {props.rating["score"]} course rating{" "}
        <span className={styles.separator}> • </span>
        {parseInt(props.rating["reviews"] / 1000)}K ratings
      </h1>

      <div>
        {reviews.map((item, index) => (
          <ReviewCard review={item} key={index} />
        ))}
      </div>
    </>
  );
}
export default Reviews;
