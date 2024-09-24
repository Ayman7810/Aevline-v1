import { UseEditDataWithToken, useInsUpdateData } from "../../hooks/UseEditData";
import { UseGetDataWithToken } from "../../hooks/UseGetData";
import { EDIT_DATA_USER, EDIT_PASSWORD_USER, GET_DATA_USER } from "../reducers/type";


  // get  Data User
  export const GetDataUser = () => async (dispach) => {
    try {
      const respose = await UseGetDataWithToken(`/api/v1/users/getMe`);
      // console.log(respose)
      dispach({
        type: GET_DATA_USER,
        paylode: respose,
      });
    } catch (e) {
      dispach({
        type: GET_DATA_USER,
        paylode: e.response,
      });
    }}


    // edit  Data User 
export const editDataUser = (data) => async (dispatch) => {
  try {
      const response = await useInsUpdateData(`/api/v1/users/updateMe`,data);
      // console.log(response)
      dispatch({
          type: EDIT_DATA_USER,
          paylode: response, 
      });
  } catch (e) {
      dispatch({
        type: EDIT_DATA_USER,
        paylode: e.response,
      });
  }
};


    // edit  Data User 
export const editPasswordUser = (data) => async (dispatch) => {
  try {
      const response = await UseEditDataWithToken(`/api/v1/users/changeMyPassword`,data);
      // console.log(response)
      dispatch({
          type: EDIT_PASSWORD_USER,
          paylode: response, 
      });
  } catch (e) {
      dispatch({
        type: EDIT_PASSWORD_USER,
        paylode: e.response,
      });
  }
};


// 