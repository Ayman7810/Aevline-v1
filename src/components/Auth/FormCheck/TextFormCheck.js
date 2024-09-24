/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React from "react";
import { Link } from "react-router-dom";

const TextFormCheck = ({ text, link }) => {
  return (
    <div class="col-7 text-end">
  
      {
        link ? (
          <Link to="/Forgot-Password"  style={{
            textDecoration: "none",
            color: "#f08080",
          }}>
        <a
          style={{
            textDecoration: "none",
            color: "#f08080",
          }}>
          {text}
        </a>
      </Link>
        ) : ( <a
          style={{
            textDecoration: "none",
            color: "#f08080",
          }}>
          {text}
        </a>)
      }
  
    </div>
  );
};

export default TextFormCheck;
