/** @format */

import { UseDeleteDataWhithToken } from "../../hooks/UseDeleteData";
import { UseEditDataWithToken } from "../../hooks/UseEditData";
import { UseGetDataWithToken } from "../../hooks/UseGetData";
import { UseInsertData } from "../../hooks/UseInsertData";
import { CREATE_COUPON, DELETE_COUPON, GET_BY_ID_COUPON, GET_ALL_COUPON, EDIT_COUPON } from "../reducers/type";

// insert Coupon new
export const createCoupon = (body) => async (dispach) => {
  try {
    const respose = await UseInsertData(`/api/v1/coupons`, body);
    // console.log(respose)
    dispach({
      type: CREATE_COUPON,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: CREATE_COUPON,
      paylode: e.response,
    });
  }
};

// get  AllCoupon
export const GetAllCoupon = () => async (dispach) => {
  try {
    const respose = await UseGetDataWithToken(`/api/v1/coupons`);
    // console.log(respose)
    dispach({
      type: GET_ALL_COUPON,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ALL_COUPON,
      paylode: e.response,
    });
  }
};
// get  AllCoupon
export const GetLimitCoupon = (limit, page) => async (dispach) => {
  try {
    const respose = await UseGetDataWithToken(
      `/api/v1/coupons?limit=${limit}&page=${page}`
    );
    // console.log(respose)
    dispach({
      type: GET_ALL_COUPON,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ALL_COUPON,
      paylode: e.response,
    });
  }
};

export const DeleteCoupon = (id) => async (dispach) => {
  try {
    const respose = await UseDeleteDataWhithToken(`/api/v1/coupons/${id}`);
    // console.log(respose)
    dispach({
      type: DELETE_COUPON,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: DELETE_COUPON,
      paylode: e.response,
    });
  }
};

export const getCouponById = (id) => async (dispach) => {
  try {
    const respose = await UseEditDataWithToken(`/api/v1/coupons/${id}`);
    // console.log(respose)
    dispach({
      type: GET_BY_ID_COUPON,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_BY_ID_COUPON,
      paylode: e.response,
    });
  }
};

export const EditCoupon= (id , body) => async (dispach) => {
  try {
    const respose = await UseEditDataWithToken(`/api/v1/coupons/${id}`,body);
    // console.log(respose)
    dispach({
      type: EDIT_COUPON,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: EDIT_COUPON,
      paylode: e.response,
    });
  }
};
