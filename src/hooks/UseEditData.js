/** @format */

import baseURL from "../Api/baseURL";

 const UseEditDataWithImageWithToken = async (url, params) => {
  const config = {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const res = await baseURL.put(url, params, config);
  return res;
};

const UseEditData = async (url, params) => {
  const res = await baseURL.put(url, params);
  return res;
};

export const UseEditDataWithToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.put(url, params, config);
  return res;
};



export const useInsUpdateData = async (url, parmas) => {
  const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  }
  const res = await baseURL.put(url, parmas, config);
  return res;
}


export { UseEditData, UseEditDataWithImageWithToken };
