/** @format */

import baseURL from "../Api/baseURL";

const UseGetData = async (url, prams) => {
  const res = await baseURL.get(url, prams);
  return res.data;
};

export const UseGetDataWithToken = async (url, prams) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseURL.get(url, config);
  return res.data;
};


export default UseGetData ;
