import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

import styles from "./CourseAboutPage.module.css";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import LoadingSpinner from "./LoadingSpinner";
import Reviews from "./Reviews";

function CourseAboutPage() {
  let { id: courseID } = useParams();
  let { category: courseCategory } = useParams();
  courseID = courseID.substring(1);
  // fetch course
  const [data, updateData] = useState(null);
  const [isLoading, updateIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/" + courseCategory)
      .then(async (response) => await response.json())
      .then((myData) => {
        return myData["courses"];
      })
      .then((myDataArray) => {
        updateIsLoading(false);
        updateData(
          myDataArray.filter((myDataArray) => myDataArray["id"] === courseID)[0]
        );
      })
      .catch(() => {
        updateData(null);
      });
  }, [courseID]);
  if (data === null) return;
  const SeeMore = ({ textHTML }) => {
    const [expanded, setExpanded] = useState(false);
    const descRef = useRef(null);
    const handleSee = () => {
      if (!expanded) {
        descRef.current.style.height = "auto";
        descRef.current.style.WebkitMaskImage = "none";
        setExpanded(true);
      } else {
        descRef.current.style = null;
        setExpanded(false);
      }
    };
    return (
      <div>
        <div
          className={styles.description}
          ref={descRef}
          dangerouslySetInnerHTML={{ __html: textHTML }}
        ></div>
        <Button
          className={`fw-bold bg-transparent border-0 p-0 ${styles.seeBtn}`}
          onClick={handleSee}
        >
          See {expanded ? "less" : "more"}
          {expanded ? (
            <i className="ms-2 fa-xs fa-solid fa-chevron-up"></i>
          ) : (
            <i className="ms-2 fa-xs fa-solid fa-chevron-down"></i>
          )}
        </Button>
      </div>
    );
  };
  return (
    data &&
    ((isLoading && <LoadingSpinner full={isLoading} />) || (
      <>
        <CourseHeader data={data} category={courseCategory} />
        <Container>
          <Row>
            {/* Course content */}
            <Col lg="8">
              <CourseContent data={data} />
            </Col>
            {/* Requirements */}
            <Col lg="8">
              <h2 className="mb-3 fs-4 fw-bold">Requirements</h2>
              <ul className="ms-3 p-0">
                {data["requirements"].map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </Col>
            {/* Description */}
            <Col lg="8">
              <h2 className="mb-3 fs-4 fw-bold">Description</h2>
              <SeeMore textHTML={data["descriptionHTML"]} />
            </Col>
            {/* Instructors */}
            <Col lg="8">
              <h2 className="mb-3 fs-4 fw-bold">Instructors</h2>
              {data["instructors"].map(
                ({ name, title, img, stats, description }, index) => (
                  <div className="mb-4" key={index}>
                    <a
                      href="/"
                      className={`fw-bold text-decoration-none border-2 border-bottom fs-5 ${styles.instructorName}`}
                    >
                      {name}
                    </a>
                    <p className={styles.instructorTitle}>{title}</p>
                    <Row>
                      <Col
                        xs="2"
                        className="d-flex flex-column justify-content-center"
                      >
                        <img
                          src={img}
                          alt={name}
                          className="rounded-circle mw-100"
                        />
                      </Col>
                      <Col>
                        <Row>
                          <Col xs="1">
                            <i className="fa-solid fa-star"></i>
                          </Col>
                          <Col>
                            <p>{stats[0]}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="1">
                            <i className="fa-solid fa-certificate"></i>
                          </Col>
                          <Col>
                            <p>{stats[1]}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="1">
                            <i className="fa-solid fa-users"></i>
                          </Col>
                          <Col>
                            <p>{stats[2]}</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="1">
                            <i className="fa-solid fa-circle-play"></i>
                          </Col>
                          <Col>
                            <p>{stats[3]}</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <SeeMore textHTML={description} />
                  </div>
                )
              )}
            </Col>
            {/* Reviews */}
            <Col lg="8">
              <Reviews reviews={data["reviews"]} rating={data["rating"]} />
            </Col>
          </Row>
        </Container>
      </>
    ))
  );
}

export default CourseAboutPage;
