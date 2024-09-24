/** @format */

import { ADD_TO_CART, APPLY_COUPON_TO_CART, DELETE_ALL_CART, DELETE_ONE_CART, EDIT_CATR_COUNT, GET_ALL_CART } from "./type";

const inatioal = {
  addCart: [],
  allCart: [],
  DeleteCart: [],
  DeleteOneCart: [],
  EditCart: [],
  couponCart: [],
};

const cartReducer = (state = inatioal, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        addCart: action.paylode,
      };
    case GET_ALL_CART:
      return {
        allCart: action.paylode,
      };
    case DELETE_ALL_CART:
      return {
        DeleteCart: action.paylode,
        done:true
      };
    case DELETE_ONE_CART:
      return {
        ...state ,
        DeleteOneCart: action.paylode,
      };
    case EDIT_CATR_COUNT:
      return {
        ...state ,
       EditCart: action.paylode,
      };
    case APPLY_COUPON_TO_CART:
      return {
        ...state ,
       couponCart: action.paylode,
      };

    default:
      return state;
  }
};

export default cartReducer;
