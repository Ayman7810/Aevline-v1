/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * eslint-disable jsx-a11y/anchor-is-valid
 *
 * @format
 */

import React from "react";

const BtnGoogel = ({text}) => {
  return (
    <div className="d-grid">
      <a tabIndex={0} className="btn btn-white radius-30 border rounded-pill" dir="rtl">
        <span className="d-flex justify-content-center align-items-center">
          <i className="fa fa-google ms-2" style={{ color: "#f08080" }}></i>{" "}
          <span>{text}</span>
        </span>
      </a>
    </div>
  );
};

export default BtnGoogel;
