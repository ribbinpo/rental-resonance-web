import axios from "axios";

export const axiosWithoutToken = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 1000,
  withCredentials: true,
});
