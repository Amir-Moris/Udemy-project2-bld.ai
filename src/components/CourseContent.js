import React from "react";
import { Col, Row } from "react-bootstrap";

import ContentDetails from "./ContentDetails";

function CourseContent(props) {
  const WhatYouWillLearn = () => {
    const skills = props.data["whatYouWillLearn"];
    return (
      <div className="mt-4 p-4 border border-1">
        <h2 className="mb-4 fs-4 fw-bold">What you'll learn</h2>
        <Row>
          {skills.map((item) => (
            <Col xs="12" lg="6" key={item}>
              <Row>
                <Col xs="1">
                  <i className="fa-solid fa-check"></i>
                </Col>
                <Col xs="11">
                  <p>{item}</p>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
    );
  };
  return (
    <>
      <WhatYouWillLearn></WhatYouWillLearn>
      <div>
        <ContentDetails content={props.data["content"]} />
      </div>
    </>
  );
}

export default CourseContent;
