import axios from "axios";
import { ENDPOINT } from "../constants/global-contants/endpoint.const";
import AuthService from "../services/auth.service";
import { TENANT_ID_KEY } from "../constants/global-contants/global-key.const";

export const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(async (req) => {
  const token = AuthService.getAccessToken();
  req.baseURL = ENDPOINT.API_BASE_URL;
  req.headers.Authorization = `Bearer ${token}`;
  // req.headers["Access-Control-Allow-Origin"] = "*";
  req.headers["TenantId"] = localStorage.getItem(TENANT_ID_KEY);
  req.headers["Content-Type"] = "application/json";
  return req;
});

export const pythonAxiosInstance = axios.create();
pythonAxiosInstance.interceptors.request.use(async (req) => {
  req.withCredentials = false;
  req.baseURL = ENDPOINT.SOCIAL_MEDIA.API.PYTHON_API.BASE;
  req.headers["Content-Type"] = "application/json";
  return req;
});
