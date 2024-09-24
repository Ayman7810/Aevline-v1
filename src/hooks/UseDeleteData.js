

import baseURL from "../Api/baseURL";

const UseDeleteData  =async (url , prams) =>{
    const res = await baseURL.delete(url , prams);
    return res.data
}

export const UseDeleteDataWhithToken = async (url) => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await baseURL.delete(url, config);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export default UseDeleteData