import { UseDeleteDataWhithToken } from "../../hooks/UseDeleteData"
import {  UseEditDataWithToken } from "../../hooks/UseEditData"
import { UseGetDataWithToken } from "../../hooks/UseGetData"
import { UseInsertData } from "../../hooks/UseInsertData"
import { CREATE_REVIEW, DELETE_REVIEW, EDIT_REVIEW, GET_ALL_REVIEW } from "../reducers/type"

// insert review new
export const createReview =(prodID , body)=> async (dispach) => {

    try {
    const respose =await UseInsertData(`/api/v1/products/${prodID}/reviews`, body )
    // console.log(respose)
      dispach( {
        type :CREATE_REVIEW,
        paylode : respose,
        lodaing : true
      })
    }
    catch (e){
            dispach({
                type : CREATE_REVIEW,
                paylode : e.response
            })
    }
  }
  

// get all review in producte
export const getAllReview =(prodID ,limit  ,page)=> async (dispach) => {

    try {
    const respose =await UseGetDataWithToken(`/api/v1/products/${prodID}/reviews?limit=${limit}&page=${page}` )
    // console.log(respose)
      dispach( {
        type :GET_ALL_REVIEW,
        paylode : respose,
        lodaing : true
      })
    }
    catch (e){
            dispach({
                type : GET_ALL_REVIEW,
                paylode : e.response
            })
    }
  }

  
// delete  review 
export const deleteReview = (id) => async (dispatch) => {
  try {
    const response = await UseDeleteDataWhithToken(`/api/v1/reviews/${id}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: response,
      loading: false,
    });
  } catch (error) {
    dispatch({
      type: DELETE_REVIEW,
      payload: error.response ? error.response.data : { message: "Unknown error occurred" },
      loading: false,
    });
  }
};

// edit  review 
export const editReview = (id, data) => async (dispatch) => {
  try {
      const response = await UseEditDataWithToken(`/api/v1/reviews/${id}`,data);
      // console.log(response)
      dispatch({
          type: EDIT_REVIEW,
          payload: response, 
          done: true, 
          lodaing: false,
      });
  } catch (e) {
      dispatch({
        type: EDIT_REVIEW,
        paylode: e.response,
      });
  }
};
