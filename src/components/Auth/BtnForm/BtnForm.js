/** @format */

import React from "react";

const BtnForm = ({text}) => {
  return (
    <div class="col-12">
      <div class="d-grid">
        <button
          type="submit"
          class="btn btn-primary radius-30 "
          style={{
            background: "#f08080",
            border: "none",
          }}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default BtnForm;
