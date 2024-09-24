/** @format */

import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddRateHook from "../../hook/review/add-rate-hook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router";
const RatePost = () => {
  const { id } = useParams();
  const [user, rateTxt, , handleRateTxt, handleRateVal, handleSubmite] =
    AddRateHook(id);

  const setting = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#f51167",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      // console.log(`Example 2: new value is ${newValue}`);
      handleRateVal(newValue);
    },
  };
  return (
    <div className="">
      <Row className="mt-3 ">
        <Col sm="12" className="  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">{user.name}</div>
          <ReactStars {...setting} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="d-felx me-2 pb-2">
          <textarea
            value={rateTxt}
            onChange={handleRateTxt}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-md-end justify-content-center  ">
            <button
              onClick={handleSubmite}
              className="btn btn-primary mb-3 mt-2 border-0"
              style={{ backgroundColor: "#f51167" }}>
              {" "}
              اضف تعليق
            </button>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RatePost;
