import React from "react";
import Oops from "../../assets/Oops.png";

const NoData = () => (
  <div className="d-flex flex-column justify-content-center align-items-center vh-100 gap-3">
    <img src={Oops} />
    <h2>No data</h2>
  </div>
);

export default NoData;
