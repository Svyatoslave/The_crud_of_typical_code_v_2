import React from "react";
import error from "../../assets/error.jpg";

const MyError = () => (
  <div className="d-flex flex-column justify-content-center align-items-center vh-100 gap-3">
    <img src={error} />
    <h2>Something went wrong</h2>
  </div>
);

export default MyError;
