/** @format */

import { CREATE_NEW_USER, LOGIN_USER } from "./type";

const inatioal = {
  createUser: [],
  loginUser: [],
  lodaing: true,
};

const authReducer = (state = inatioal, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.paylode,
        lodaing: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.paylode,
        lodaing: false,
      };
    default:
      return state;
  }
};

export default authReducer;
