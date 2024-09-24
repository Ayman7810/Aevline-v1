/** @format */

import { UseDeleteDataWhithToken } from "../../hooks/UseDeleteData";
import { UseEditDataWithToken, useInsUpdateData } from "../../hooks/UseEditData";
import { UseGetDataWithToken } from "../../hooks/UseGetData";
import { UseInsertData } from "../../hooks/UseInsertData";
import { ADD_TO_CART, APPLY_COUPON_TO_CART, DELETE_ALL_CART, DELETE_ONE_CART, EDIT_CATR_COUNT, GET_ALL_CART } from "../reducers/type";

// insert Coupon new
export const AddToCart = (body) => async (dispach) => {
  try {
    const respose = await UseInsertData(`/api/v1/cart`, body);
    // console.log(respose)
    dispach({
      type: ADD_TO_CART,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: ADD_TO_CART,
      paylode: e.response,
    });
  }
};

export const GetAllCart = () => async (dispach) => {
  try {
    const respose = await UseGetDataWithToken(`/api/v1/cart`);
    // console.log(respose)
    dispach({
      type: GET_ALL_CART,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ALL_CART,
      paylode: e.response,
    });
  }
};

export const DeleteAllItemsCart = () => async (dispach) => {
  try {
    const respose = await UseDeleteDataWhithToken(`/api/v1/cart`);
    // console.log(respose)
    dispach({
      type: DELETE_ALL_CART,
      paylode: respose,
      done : true
    });
  } catch (e) {
    dispach({
      type: DELETE_ALL_CART,
      paylode: e.response,
    });
  }
};

export const DeleteOneItemsCart = (id) => async (dispach) => {
  try {
    const respose = await UseDeleteDataWhithToken(`/api/v1/cart/${id}`);
    // console.log(respose)
    dispach({
      type: DELETE_ONE_CART,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: DELETE_ONE_CART,
      paylode: e.response,
    });
  }
};


export const EditCountCart= (id , body) => async (dispach) => {
  try {
    const respose = await UseEditDataWithToken(`/api/v1/cart/${id}`,body);
    // console.log(respose)
    dispach({
      type: EDIT_CATR_COUNT,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: EDIT_CATR_COUNT,
      paylode: e.response,
    });
  }
};


export const ApplyCouponToCart= (body) => async (dispach) => {
  try {
    const respose = await UseEditDataWithToken(`/api/v1/cart/applyCoupon`,body);
    console.log(respose)
    dispach({
      type: APPLY_COUPON_TO_CART,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: APPLY_COUPON_TO_CART,
      paylode: e.response,
    });
  }
};

