/** @format */

import { UseDeleteDataWhithToken } from "../../hooks/UseDeleteData";
import { UseGetDataWithToken } from "../../hooks/UseGetData";
import { UseInsertData } from "../../hooks/UseInsertData";
import { ADD_TO_WISHLIST, DELETE_FROM_WISHLIST, GET_ALL_WISHLIST,  } from "../reducers/type";

// insert wishList
export const addProductToWishList = (body) => async (dispach) => {
  try {
    const respose = await UseInsertData(`/api/v1/wishlist`,body);
    // console.log(respose)
    dispach({
      type: ADD_TO_WISHLIST,
      paylode: respose,
      lodaing: true,
    });
  } catch (e) {
    dispach({
      type: ADD_TO_WISHLIST,
      paylode: e.response,
    });
  }
};

export const deleteProductFromWishList = (id) => async (dispatch) => {
    try {
      const response = await UseDeleteDataWhithToken(`/api/v1/wishlist/${id}`);
    // console.log(response)
      dispatch({
        type: DELETE_FROM_WISHLIST,
        payload: response,
        loading: true,
        done : true
      });
    } catch (e) {
      dispatch({
        type: DELETE_FROM_WISHLIST,
        payload: e.response
      });
    }
  };



  export const getAllWishList = () => async (dispatch) => {
    try {
      const response = await UseGetDataWithToken(`/api/v1/wishlist`);
      // console.log(response);
      dispatch({
        type: GET_ALL_WISHLIST,
        paylode: response,
        lodaing: false
      });
    } catch (e) {
      console.error("Error fetching wishlist:", e);
      dispatch({
        type: GET_ALL_WISHLIST,
        paylode: e.response ? e.response.data : "An error occurred",
        lodaing: false
      });
    }
  };
  