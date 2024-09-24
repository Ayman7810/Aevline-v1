/** @format */

import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://aevlineapi.onrender.com",
});
export const url = "https://aevlineapi.onrender.com";
export default baseUrl;
