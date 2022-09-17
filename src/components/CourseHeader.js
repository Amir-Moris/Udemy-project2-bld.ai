import React from "react";
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import styles from "./CourseAboutPage.module.css";
import NavBar from "./NavBar";
function CourseHeader(props) {
  function RatingStars() {
    return <></>;
  }
  let data = props.data;
  return (
    <header>
      {/* <Navbar
        className={`position-fixed d-block py-2 px-4 top-0 w-100 ${styles.fixedNavbar}`}>
          <h6 className="mb-1">{data["title"]}</h6>
          <div className={styles.rating}>
          <RatingStars score={data["score"]} />
          <a href="/" className={`ms-1 ${styles.reviews}`}>
            ({data["rating"]["reviews"].toLocaleString("en-US")})
          </a>
          <span className="ms-2">
            {data["students"].toLocaleString("en-US")} students
          </span>
        </div>
      </Navbar> */}
      {/* <Row>
            <Col
              xs={{ order: 2, span: 12 }}
              lg={{ order: 1, span: 8 }}
              className="pe-lg-3"
            >
              <img
                src={data["image"]}
                alt="img"
                width="100%"
                className="mb-3 d-block d-lg-none"
              ></img>
              <h3>{data["title"]}</h3>
              <p>{data["shortDescription"]}</p>
              <div className={styles.rating}>
                <RatingStars score={3.5} />
                <a href="/" className={`ms-1 ${styles.reviews}`}>
                  ({data["rating"]["reviews"].toLocaleString("en-US")})
                </a>
                <span className="ms-2">
                  {data["students"].toLocaleString("en-US")} students
                </span>
              </div>
              <div className={`mt-2 ${styles.author}`}>
                Created by {<a href="/">{data["author"]}</a>}
              </div>
              <div className={`mt-2 ${styles.info}`}>
                <div className="d-block d-lg-inline">
                  <i className="fa-solid fa-circle-info me-2"></i>Last updated
                  {data["lastUpdate"]}
                </div>
                <div className="d-block d-lg-inline">
                  <i className="fa-solid fa-globe ms-lg-3 me-2"></i>
                  {data["locale"]}
                </div>
                <div className="d-block d-lg-inline">
                  <i className="fa-solid fa-closed-captioning ms-lg-3 me-2"></i>
                  {data["caption"]}
                </div>
              </div>
              <div className="d-block d-lg-none mt-3">
                <h1>
                  E£
                  {data["price"].toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
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
              <CourseSideCard />
            </Col>
          </Row> */}
    </header>
  );
}

export default CourseHeader;
