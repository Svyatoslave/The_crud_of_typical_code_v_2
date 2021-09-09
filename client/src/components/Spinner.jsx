import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="primary" />
  </div>
);

export default Loader;
