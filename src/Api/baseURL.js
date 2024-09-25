/** @format */

import axios from "axios";

// const baseUrl = axios.create({
//   baseURL: "http://127.0.0.1:8000",
// });
// export const url = "http://127.0.0.1:8000";
const baseUrl = axios.create({
  baseURL: "https://aevlineapi.onrender.com",
});
export const url = "https://aevlineapi.onrender.com";
export default baseUrl;
