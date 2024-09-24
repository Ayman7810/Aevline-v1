/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReview } from "../../redux/action/reviewAction";

const GetAllReviewHook = (id) => {
  const limit = 5
  const dispatch = useDispatch();

  const [lodaing, setLodaing] = useState(true);

  useEffect(() => {
    setLodaing(true);
                        // id , limit , page
    dispatch(getAllReview(id, 3 ,1));
    setLodaing(false);
  }, [id , dispatch]);

  const dataRate = useSelector((state) => state.review.getAllRate);

  var countPage = 0;
  if (dataRate.paginationResult) {
    countPage = dataRate.paginationResult.numberOfPages;
  }
  // console.log(dataRate);
  const noPress = async (page) => {
      await dispatch(getAllReview(id, 3, page));
    //   console.log(page)
  };

  return [dataRate, noPress, countPage];
};

export default GetAllReviewHook;
