import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";

import styles from "./CourseHeader.module.css";
import LoadingSpinner from "./LoadingSpinner";

function CourseSideNavBar(props) {
  // screen scroll
  const useScrollPositionHook = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      };
      window.addEventListener("scroll", updatePosition);
      updatePosition();
      return () => window.removeEventListener("scroll", updatePosition);
    }, []);
    return scrollPosition;
  };
  let scrollPosition = useScrollPositionHook();
  // heart loading
  const [heartLoading, setHeartLoading] = useState(false);
  const [heartSuccess, setHeartSuccess] = useState(false);
  const handleHeart = () => {
    if (!heartSuccess) {
      setHeartLoading(true);
      setTimeout(() => {
        setHeartLoading(false);
        setHeartSuccess(true);
      }, 500);
    } else {
      setHeartLoading(true);
      setHeartSuccess(false);
      setTimeout(() => {
        setHeartLoading(false);
      }, 500);
    }
  };

  return (
    <div
      className={`d-none d-lg-block position-fixed ${styles.courseSideCard}`}
      style={{ top: scrollPosition > 60 ? "80px" : "" }}
    >
      <img
        src={props.src}
        alt="img"
        width="100%"
        className={scrollPosition > 60 ? "d-none" : ""}
      ></img>

      <div className={`p-3 ${styles.info}`}>
        <h2 className="mb-4">
          E£{" "}
          {props.price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </h2>
        <Row className="gx-2 mb-2">
          <Col>
            {/* Buttons */}
            <Button
              className={`w-100 h-100 rounded-0 py-3 fs-5 fw-bold mb-2 border-0 ${styles.addCartBtn}`}
            >
              Add to Cart
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              onClick={handleHeart}
              className={`w-100 h-100 rounded-0 py-3 px-4 fs-5 fw-bold bg-white text-body border-dark ${styles.buyBtn}`}
            >
              {!heartLoading && !heartSuccess && (
                <i className="fs-4 fa fa-heart"></i>
              )}
              {heartLoading && <LoadingSpinner full={false} />}
              {heartSuccess && (
                <i className="fs-4 fa fa-heart  text-danger"></i>
              )}
            </Button>
          </Col>
        </Row>

        <Button
          className={`w-100 h-100 rounded-0 py-3 fs-5 fw-bold bg-white text-body border-dark ${styles.buyBtn}`}
        >
          Buy now
        </Button>
        <p className="text-center mt-3">30-Day Money-Back Guarantee</p>
        <div>
          {/* includes */}
          <p className="fw-bold">This course includes</p>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-regular fa-file-video"></i>
            </Col>
            <Col>{props.includes["video"]} hours on-demand video</Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-regular fa-file"></i>
            </Col>
            <Col>
              {props.includes["articles"]} article
              {props.includes["articles"] > 1 ? "s" : ""}
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-download"></i>
            </Col>
            <Col>
              {props.includes["download"]} downloadable resource
              {props.includes["download"] > 1 ? "s" : ""}
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-infinity"></i>
            </Col>
            <Col>Full lifetime access</Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-mobile-screen"></i>
            </Col>
            <Col>Access on mobile and TV</Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-trophy"></i>
            </Col>
            <Col>Certificate of completion</Col>
          </Row>
        </div>
        {/* footer */}
        <div
          className={`d-flex justify-content-around mt-3 mb-3 ${styles.share}`}
        >
          <a href="/">Share</a>
          <a href="/">Gift this course</a>
          <a href="/">Apply Coupon</a>
        </div>
      </div>
    </div>
  );
}
export default CourseSideNavBar;
