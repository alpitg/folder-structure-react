import axios from "axios";

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









