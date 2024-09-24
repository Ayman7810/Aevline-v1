/** @format */

import { CREATE_COUPON, DELETE_COUPON, EDIT_COUPON, GET_ALL_COUPON, GET_BY_ID_COUPON } from "./type";

const inatioal = {
  createCoupon: [],
  deleteCoupon: [],
  coupon: [],
  EditCoupon: [],
  allCoupon: [],
};

const couponReducer = (state = inatioal, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        ...state,
        createCoupon: action.paylode,
      };
    case GET_ALL_COUPON:
      return {
        ...state,
        allCoupon: action.paylode,
      };
    case DELETE_COUPON:
      return {
        deleteCoupon: action.paylode,
      };
    case GET_BY_ID_COUPON:
      return {
        coupon: action.paylode,
      };
    case EDIT_COUPON:
      return {
        ...state,
        EditCoupon: action.paylode,
      };

    default:
      return state;
  }
};

export default couponReducer;
