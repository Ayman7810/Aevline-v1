/** @format */

import { UseInsertData } from "../../hooks/UseInsertData";
import { CREATE_NEW_USER, LOGIN_USER } from "../reducers/type";

// create new user
export const createUser = (data) => async (dispach) => {
  try {
    
    const respose = await UseInsertData(`/api/v1/auth/signup`, data);
    // console.log(respose);
    dispach({
      type: CREATE_NEW_USER,
      paylode: respose,
      lodaing: true,
    });
  } catch (e) {
    dispach({
      type: CREATE_NEW_USER,
      paylode:e.response 
    });
  }
};


// login  user
export const loginUser = (data) => async (dispach) => {
  try {
    
    const respose = await UseInsertData(`/api/v1/auth/login`, data);
    dispach({
      type: LOGIN_USER,
      paylode: respose,
      lodaing: true,
    });
  } catch (e) {
    dispach({
      type: LOGIN_USER,
      paylode:e.response 
    });
  }
};
