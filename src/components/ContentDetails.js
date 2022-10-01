import React, { useState } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";

import styles from "./CourseContent.module.css";

function ContentDetails(props) {
  const contentDetails = props.content["contentDetails"];
  const [allSections, setAllSections] = useState(contentDetails.length <= 9);

  return (
    <div>
      <h2 className="mt-4 mb-4 fs-4 fw-bold">Course content</h2>
      {/* summary */}
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start text-nowrap">
        <p>
          {props.content["sections"]} section • {props.content["lectures"]}{" "}
          lecture • {props.content["total"]} total length
        </p>
      </div>

      {/* sections */}
      <div className="accordion-container">
        <Accordion>
          {contentDetails.map(
            ({ title, lectures, duration, lecturesDetails }, index) => {
              return !allSections && index > 8 ? null : (
                <Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header className={styles.accordionHeader}>
                    <div className="ms-5 w-100 d-flex justify-content-between">
                      {title}
                      <span className="ms-3">
                        {lectures} lecture
                        {parseInt(lectures) > 1 ? "s" : ""} • {duration}
                      </span>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ul className={`mt-2 ${styles.lecturesList}`}>
                      {lecturesDetails.map(
                        ({ title, preview, duration }, index) => (
                          <li key={index}>
                            <Row>
                              <Col xs="1">
                                {duration.includes(":") ? (
                                  <i className="fa-solid fa-circle-play"></i>
                                ) : (
                                  <i className="fa-regular fa-file"></i>
                                )}
                              </Col>
                              <Col>
                                <p
                                  className={`${
                                    preview ? styles.lecturePreview : ""
                                  } ${styles.lectureTitle}`}
                                >
                                  {title}
                                </p>
                              </Col>
                              {preview && (
                                <Col xs="2">
                                  <p className={styles.lecturePreview}>
                                    Preview
                                  </p>
                                </Col>
                              )}
                              <Col
                                xs="1"
                                className="d-flex justify-content-end text-nowrap"
                              >
                                <p
                                  className={`text-right ${styles.lectureDuration}`}
                                >
                                  {duration}
                                </p>
                              </Col>
                            </Row>
                          </li>
                        )
                      )}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              );
            }
          )}
        </Accordion>

        {!allSections && props.content["sections"] > 9 && (
          <Button
            className="w-100 mt-3 border-1 rounded-0 border-dark bg-transparent text-dark fw-bold"
            onClick={() => setAllSections(true)}
          >
            Show {contentDetails.length - 9} more sections
          </Button>
        )}
      </div>
    </div>
  );
}

export default ContentDetails;
