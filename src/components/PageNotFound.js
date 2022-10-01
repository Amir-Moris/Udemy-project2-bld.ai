import React from "react";

function PageNotFound() {
  return (
    <>
      <center className="mt-5">
        <h1 className="error-404" style={{ fontSize: "150px" }}>
          404
        </h1>
        <h4 className="not-found" style={{ fontSize: "100px" }}>
          Page Not Found
        </h4>
      </center>
    </>
  );
}

export default PageNotFound;
