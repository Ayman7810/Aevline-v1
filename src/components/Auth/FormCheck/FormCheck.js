/** @format */

import React from "react";

const FormCheck = ({text}) => {
  return (
    <div class="col-5 d-flex">
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          checked=""
        />
        {text ? (
          <label class="form-check-label" for="flexSwitchCheckChecked">
            {text}
          </label>
        ) : null}
      </div>
    </div>
  );
};

export default FormCheck;
