import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "5rem", height: "5rem" }} className="spinner-border " role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
