/** @format */

import { CREATE_ADDRESS, DELETE_ADDRESS, EDIT_ADDRESS, GET_ALL_ADDRESS, GET_BY_ID_ADDRESS } from "./type";

const inatioal = {
  allAddress: [],
  addAddress: [],
  deleteAddress: [],
  editAddress: [],
  address: [],

};

const addressReducer = (state = inatioal, action) => {
  switch (action.type) {
    case CREATE_ADDRESS:
      return {
        ...state,
        addAddress: action.paylode,
      };
    case GET_ALL_ADDRESS:
      return {
        ...state,
        allAddress: action.paylode,
      };
    case DELETE_ADDRESS:
      return {
        ...state,
        deleteAddress: action.paylode,
      };
    case GET_BY_ID_ADDRESS:
      return {
        ...state,
        address: action.paylode,
      };
    case EDIT_ADDRESS:
      return {
        ...state,
        editAddress: action.paylode,
      };
    default:
      return state;
  }
};

export default addressReducer;
