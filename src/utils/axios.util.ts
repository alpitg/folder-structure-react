import axios from "axios";
import { ENDPOINT } from "../constants/global-contants/endpoint.const";

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(async (req) => {
  // const token = await getAccessToken()
  const token = "";
  req.baseURL = "";
  req.headers.Authorization = `Bearer ${token}`;
  req.headers["Access-Control-Allow-Origin"] = "*";
  req.headers["Content-Type"] = "application/json";
  return req;
});

export const pythonAxiosInstance = axios.create();
pythonAxiosInstance.interceptors.request.use(async (req) => {
  req.withCredentials = false;
  req.baseURL = ENDPOINT.SOCIAL_MEDIA.API.PYTHON_API.BASE;
  //   const token = "";
  //   req.headers.Authorization = `Bearer ${token}`;
  //   req.headers["Access-Control-Allow-Origin"] = "*";
  req.headers["Content-Type"] = "application/json";
  return req;
});
