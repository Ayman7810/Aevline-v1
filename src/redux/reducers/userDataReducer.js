/** @format */

import { EDIT_DATA_USER, EDIT_PASSWORD_USER, GET_DATA_USER } from "./type";

const inatioal = {
  user: [],
  editUser: [],
  password: [],
};

const userDataReducer = (state = inatioal, action) => {
  switch (action.type) {
    case GET_DATA_USER:
      return {
        ...state,
        user: action.paylode,
      };
    case EDIT_DATA_USER:
      return {
        editUser: action.paylode,
      };
      case EDIT_PASSWORD_USER:
        return {
          ...state,
          password: action.paylode,
        };

    default:
      return state;
  }
};

export default userDataReducer;
