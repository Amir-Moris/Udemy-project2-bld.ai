import React from "react";

import Panner from "./Panner";
import Courses from "./Courses";

function HomePage(props) {
  return (
    <>
      <main>
        <Panner></Panner>
        <Courses></Courses>
      </main>
    </>
  );
}
export default HomePage;
