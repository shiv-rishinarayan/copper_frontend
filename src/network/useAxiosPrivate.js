

import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Router from "next/router"; // To handle redirection
import { GetUserData } from "../utils/GetUserData";
import { BASE_URL } from "../api/copperAPI";

let sessionExpired = false;

const useAxiosPrivate = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "*/*",
    },
  });

  const tokenExpiredCheck = (token) => {
    if (!token) return true;
    try {
      const decodedToken = jwtDecode(token); // Use the correct function
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decodedToken.exp < currentTime; // Compare with expiration time
    } catch (error) {
      console.error("Error decoding token:", error);
      return true;
    }
  };

  // Add Request Interceptor
  axiosInstance.interceptors.request.use(
    async (config) => {
      const userData = await GetUserData();
      if (userData.access_token) {
        try {
          const isTokenExpired = tokenExpiredCheck(userData.access_token);
          console.log("isTokenExpired ---- ", isTokenExpired);

          if (isTokenExpired && !sessionExpired) {
            sessionExpired = true;
            localStorage.clear();
            document.cookie =
              "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
            toast.info("Session expired. Please log in again.");
            Router.push("/");
            return Promise.reject(new Error("Token expired"));
          }

          // Attach token to request headers
          config.headers["Authorization"] = `Bearer ${userData.access_token}`;
        } catch (err) {
          console.log("error --- ", err);
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return axiosInstance;
};

export default useAxiosPrivate;
