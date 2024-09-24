/** @format */

import UseDeleteData, {
  UseDeleteDataWhithToken,
} from "../../hooks/UseDeleteData";
import { UseEditDataWithImageWithToken } from "../../hooks/UseEditData";
import UseGetData, { UseGetDataWithToken } from "../../hooks/UseGetData";
import { UseInsertDataWithImage } from "../../hooks/UseInsertData";
import {
  CREATE_PRODUCTE,
  DELETE_PRODUCTE,
  EDIT_PRODUCTE,
  GET_ALL_PRODUCTE,
  GET_ERROR,
  GET_Limit_PRODUCTE,
  GET_PRODUCTE_DETALIS,
  GET_PRODUCTES_BY_CATEGORY,
  GET_SIMILAR_PRODUCTES,
} from "../reducers/type";

// insert producte new
export const createProducte = (formData) => async (dispach) => {
  try {
    const respose = await UseInsertDataWithImage(`/api/v1/products`, formData);
    // console.log(respose)
    dispach({
      type: CREATE_PRODUCTE,
      paylode: respose,
      lodaing: true,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

// get All Data
export const GetAllProductes = () => async (dispach) => {
  try {
    const respose = await UseGetData(`/api/v1/products`);
    // console.log(respose)
    dispach({
      type: GET_ALL_PRODUCTE,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

export const GetLimitProductes = (limit) => async (dispach) => {
  try {
    const respose = await UseGetData(`/api/v1/products?limit=${limit}`);
    // console.log(respose)
    dispach({
      type: GET_Limit_PRODUCTE,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_Limit_PRODUCTE,
      paylode: e.response,
    });
  }
};

export const GetProducteById = (id) => async (dispach) => {
  try {
    const respose = await UseGetDataWithToken(`/api/v1/products/${id}`);
    // console.log(respose)
    dispach({
      type: GET_PRODUCTE_DETALIS,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

export const GetSimilarProductes = (cat) => async (dispach) => {
  try {
    const respose = await UseGetData(`/api/v1/products?category=${cat}`);
    // console.log(respose)
    dispach({
      type: GET_SIMILAR_PRODUCTES,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

// get data via number page
export const GetProductPage = (limit, page) => async (dispach) => {
  try {
    const respose = await UseGetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );
    // console.log(respose)
    dispach({
      type: GET_Limit_PRODUCTE,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

// get data via  query string
export const GetProductSearch = (queryString) => async (dispach) => {
  try {
    const respose = await UseGetData(`/api/v1/products?${queryString}`);
    // console.log(respose)
    dispach({
      type: GET_Limit_PRODUCTE,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

export const DeleteProducte = (id) => async (dispach) => {
  try {
    const respose = await UseDeleteDataWhithToken(`/api/v1/products/${id}`);
    // console.log(respose)
    dispach({
      type: DELETE_PRODUCTE,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_ERROR,
      paylode: "Error" + e,
    });
  }
};

export const editProducte = (id, data) => async (dispatch) => {
  try {
    const response = await UseEditDataWithImageWithToken(
      `/api/v1/products/${id}`,
      data
    );
    // console.log(response)
    dispatch({
      type: EDIT_PRODUCTE,
      payload: response, // تأكد من أن `response.data` هو ما تحتاجه
      lodaing: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_PRODUCTE,
      paylode: e.response,
    });
  }
};

export const GetProductesByCategory = (limit, page, id) => async (dispach) => {
  try {
    const respose = await UseGetData(
      `/api/v1/products?limit=${limit}&page=${page}&category[in][]=${id}`
    );
    // console.log(respose);
    dispach({
      type: GET_PRODUCTES_BY_CATEGORY,
      paylode: respose,
    });
  } catch (e) {
    dispach({
      type: GET_PRODUCTES_BY_CATEGORY,
      paylode: e.response,
    });
  }
};
