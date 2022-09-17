import React, { useEffect, useState, useRef } from "react";
import { Route, useParams } from "react-router-dom";

import NavBar from "./NavBar";
import CourseHeader from "./CourseHeader";
import styles from "./CourseAboutPage.module.css";
function CourseAboutPage(props) {
  let { id: courseID } = useParams();
  let { category: courseCategory } = useParams();
  courseID = courseID.substring(1);

  // fetch course
  let [data, updateData] = useState(null);
  const [isLoading, updateIsLoading] = useState(true);
  const [Error, updateError] = useState(null);
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
        updateError(true);
        updateData(null);
      });
  }, [courseID]);

  const cardRef = useRef(null);

  return (
    data && <CourseHeader data={data} />
    //  <CourseCurriculum />
    //  <Reviews />
    //  <Footer ref={footerRef} />
  );
}

export default CourseAboutPage;
