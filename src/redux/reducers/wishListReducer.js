/** @format */

import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, GET_ALL_WISHLIST } from "./type";

const inatioal = {
  addWishList: [],
  allWishList: [],
  deleteWishList: [],
  lodaing: true,
};

const wishListReducer = (state = inatioal, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishList: action.paylode,
        lodaing: false,
      };
    case DELETE_FROM_WISHLIST:
      return {
        ...state,
        deleteWishList: action.paylode,
        lodaing: false,
        done: action.done,
      };
    case GET_ALL_WISHLIST:
      return {
        ...state,
        allWishList: action.paylode,
        lodaing: false,
        done: action.done,
      };
    default:
      return state;
  }
};

export default wishListReducer;
