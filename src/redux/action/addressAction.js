import { UseDeleteDataWhithToken } from "../../hooks/UseDeleteData";
import { UseEditDataWithToken } from "../../hooks/UseEditData";
import { UseGetDataWithToken } from "../../hooks/UseGetData";
import { UseInsertData } from "../../hooks/UseInsertData";
import { CREATE_ADDRESS, DELETE_ADDRESS, EDIT_ADDRESS, GET_ALL_ADDRESS, GET_BY_ID_ADDRESS } from "../reducers/type";

// insert Address for usernew
export const addAddress = (body) => async (dispach) => {
    try {
      const respose = await UseInsertData(`/api/v1/addresses`, body);
    //   console.log(respose)
      dispach({
        type: CREATE_ADDRESS,
        paylode: respose,
      });
    } catch (e) {
      dispach({
        type: CREATE_ADDRESS,
        paylode: e.response,
      });
    }
  };

  // get  Alladdress
export const GetAlladdress = () => async (dispach) => {
    try {
      const respose = await UseGetDataWithToken(`/api/v1/addresses`);
      // console.log(respose)
      dispach({
        type: GET_ALL_ADDRESS,
        paylode: respose,
      });
    } catch (e) {
      dispach({
        type: GET_ALL_ADDRESS,
        paylode: e.response,
      });
    }
  };


  export const DeleteAddress = (id) => async (dispach) => {
    try {
      const respose = await UseDeleteDataWhithToken(`/api/v1/addresses/${id}`);
      // console.log(respose)
      dispach({
        type: DELETE_ADDRESS,
        paylode: respose,
      });
    } catch (e) {
      dispach({
        type: DELETE_ADDRESS,
        paylode: e.response,
      });
    }
  };


  
export const getAddressById = (id) => async (dispach) => {
    try {
      const respose = await UseEditDataWithToken(`/api/v1/addresses/${id}`);
      // console.log(respose)
      dispach({
        type: GET_BY_ID_ADDRESS,
        paylode: respose,
      });
    } catch (e) {
      dispach({
        type: GET_BY_ID_ADDRESS,
        paylode: e.response,
      });
    }
  };


export const editAddress = (id , body) => async (dispach) => {
    try {
      const respose = await UseEditDataWithToken(`/api/v1/addresses/${id}`,body);
      // console.log(respose)
      dispach({
        type: EDIT_ADDRESS,
        paylode: respose,
      });
    } catch (e) {
      dispach({
        type: EDIT_ADDRESS,
        paylode: e.response,
      });
    }
  };