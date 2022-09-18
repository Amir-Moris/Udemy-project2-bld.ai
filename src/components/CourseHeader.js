import React, { useEffect, useState, useRef } from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";

import CourseSideNavBar from "./CourseSideNavBar";
import styles from "./CourseHeader.module.css";

function CourseHeader(props) {
  const data = props.data;
  // screen scroll
  let [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const fixedNavRef = useRef(null);
  const bottomNavRef = useRef(null);
  const botNavOriginalPosition = useRef(-1);
  useEffect(() => {
    if (botNavOriginalPosition.current === -1)
      botNavOriginalPosition.current = bottomNavRef.current.offsetTop;
    else return () => {};
  }, [bottomNavRef]);
  useEffect(() => {
    // console.log(scrollPosition);
    if (
      scrollPosition >
      botNavOriginalPosition.current - fixedNavRef.current.clientHeight
    ) {
      bottomNavRef.current.classList.add("position-fixed");
      bottomNavRef.current.classList.add(styles.botNavFixed);
      fixedNavRef.current.style.display = "block";
    } else {
      bottomNavRef.current.classList.remove("position-fixed");
      bottomNavRef.current.classList.remove(styles.botNavFixed);
      fixedNavRef.current.style.display = "none";
    }
  }, [scrollPosition]);
  // rating
  function RatingStars(props) {
    let score = props.rating["score"];
    const stars = [];

    // stars rating
    for (let i = 1; i <= 5; i++, score--) {
      if (score >= 1) {
        stars.push(<span className="bi bi-star-fill" key={i}></span>);
      } else if (score > 0) {
        stars.push(<span className="bi bi-star-half" key={i}></span>);
      } else {
        stars.push(<span className="bi bi-star" key={i}></span>);
      }
    }

    return (
      <span className={styles.rating}>
        <span className={styles.score}>{props.rating["score"]}</span>
        <span className={styles.stars}>{stars}</span>
        <a href="#" className={`ms-1 ${styles.reviews}`}>
          ({props.rating["reviews"]})
        </a>
        <span className="ms-2">{props.students} students</span>
      </span>
    );
  }

  return (
    <header>
      {/* fixed navbar */}
      <Navbar
        className={`position-fixed py-2 px-4 top-0 w-100 ${styles.fixedNav}`}
        ref={fixedNavRef}
      >
        <h6 className="mb-1">{data["title"]}</h6>
        <div className={styles.rating}>
          <RatingStars rating={data["rating"]} students={data["students"]} />
        </div>
      </Navbar>

      <div className={`py-3 ${styles.courseHeader}`}>
        <Container>
          {/* fixed header */}
          <Row>
            <Col
              xs={{ order: 2, span: 12 }}
              lg={{ order: 1, span: 8 }}
              className="pe-lg-3"
            >
              {/* course path */}
              <Breadcrumb>
                <Breadcrumb.Item className={styles.breadcrumbItem} href="#">
                  Development
                </Breadcrumb.Item>
                <Breadcrumb.Item className={styles.breadcrumbItem} href="#">
                  Programming Languages
                </Breadcrumb.Item>
                <Breadcrumb.Item className={styles.breadcrumbItem} href="#">
                  {props.category}
                </Breadcrumb.Item>
              </Breadcrumb>
              {/* course info */}
              <img
                src={data["image"]}
                alt="course"
                width="100%"
                className="mb-3 d-block d-lg-none"
              ></img>
              <h3>{data["title"]}</h3>
              <p>{data["shortDescription"]}</p>
              <div className={styles.rating}>
                <RatingStars
                  rating={data["rating"]}
                  students={data["students"]}
                />
              </div>
              <div className={`mt-2 ${styles.author}`}>
                Created by {<a href="/">{data["author"]}</a>}
              </div>
              <div className={`mt-2 ${styles.info}`}>
                <div className="d-block d-lg-inline">
                  <i className="bi bi-info-circle me-2"></i>
                  Last updated {data["lastUpdate"]}
                </div>
                <div className="d-block d-lg-inline">
                  <i className="bi bi-globe ms-lg-3 me-2"></i>
                  {data["locale"]}
                </div>
                <div className="d-block d-lg-inline">
                  <i className="bi bi-badge-cc ms-lg-3 me-2"></i>
                  {data["caption"]}
                </div>
              </div>
              <div className="d-block d-lg-none mt-3">
                <h1>
                  E£
                  {data["price"].toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </h1>
                <Button
                  className={`w-100 rounded-0 border-0 mt-1 py-2 ${styles.addCartBtn}`}
                >
                  Add to cart
                </Button>
                <div
                  className={`d-flex flex-column align-items-center mt-4 ${styles.guarantee}`}
                >
                  <p>30-Day Money-Back Guarantee</p>
                  <p>Full Lifetime Access</p>
                </div>
                <div
                  className={`d-flex justify-content-around mt-3 mb-3 ${styles.share}`}
                >
                  <a href="/">Share</a>
                  <a href="/">Gift this course</a>
                  <a href="/">Apply Coupon</a>
                </div>
              </div>
            </Col>
            <Col
              xs={{ order: 1, span: 12 }}
              lg={{ order: 2, span: 2 }}
              className="position-relative"
            >
              <CourseSideNavBar
                src={data["image"]}
                price={data["price"]}
                includes={data["includes"]}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* fixed bottom navbar */}
      <Navbar
        ref={bottomNavRef}
        bg="light"
        className={`border-bottom border-1 p-0 ${styles.botNav}`}
      >
        <Container>
          <Row style={{ width: "100%" }}>
            <Col lg={{ span: 8 }}>
              <Nav className="justify-content-around text-nowrap">
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Overview
                  </a>
                </Nav.Item>
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Curriculum
                  </a>
                </Nav.Item>
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Instructor
                  </a>
                </Nav.Item>
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Reviews
                  </a>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
}

export default CourseHeader;
