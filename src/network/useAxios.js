// import axios from "axios";
// import { toast } from "react-toastify";
// import { jwtDecode } from 'jwt-decode';
// import Router from "next/router"; // To handle redirection
// import { REFRESH_TOKEN_API } from "../api/authAPI";

// const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL;

// let isRefreshing = false; // Flag to track if a refresh is in progress
// let refreshSubscribers = []; // Queue for requests waiting for a refreshed token

// const useAxios = () => {
//   const axiosInstance = axios.create({
//     baseURL: BASE_URL,
//     headers: {
//       "Content-Type": "application/json;charset=UTF-8",
//       Accept: "*/*",
//     },
//   });

//   const tokenExpiredCheck = (token) => {
//     if (!token) return true;
//     try {
//       const decodedToken = jwtDecode(token);
//       const currentTime = Date.now() / 1000;  // Current time in seconds
//       return decodedToken.exp < currentTime;  // Compare with expiration time
//     } catch (error) {
//       console.error('Error decoding token:', error);
//       return true;
//     }
//   };

//   const clearSession = () => {
//     localStorage.clear();
//     document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//     document.cookie = "refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
//     toast.info("Session expired. Please log in again.");
//     Router.push("/");
//   };

//   const onRefreshed = (newToken) => {
//     refreshSubscribers.forEach((callback) => callback(newToken));
//     refreshSubscribers = [];
//   };

//   const subscribeToTokenRefresh = (callback) => {
//     refreshSubscribers.push(callback);
//   };

//   axiosInstance.interceptors.request.use(
//     async (config) => {
//       const userData = await GetUserData();

//       // const userDataStorage = localStorage.getItem("userData");
//       // const userData = JSON.parse(userDataStorage || "{}");

//       if (userData?.access_token) {
//         try {
//           const isTokenExpired = tokenExpiredCheck(userData.access_token);

//           if (isTokenExpired) {
//             if (!isRefreshing) {
//               isRefreshing = true;

//               try {
//                 const res = await axios.post(
//                   REFRESH_TOKEN_API,
//                   {}, // Empty body, since the token is in the cookie
//                   {
//                     withCredentials: true, // Allow cookies to be sent with the request
//                   }
//                 );

//                 if (res.data?.access) {
//                   const newAccessToken = res.data.access;

//                   // Update localStorage and cookies
//                   const updatedUserData = {
//                     ...userData,
//                     access_token: newAccessToken,
//                   };
//                   localStorage.setItem(
//                     "userData",
//                     JSON.stringify(updatedUserData)
//                   );
//                   document.cookie = `userData=${encodeURIComponent(
//                     JSON.stringify(updatedUserData)
//                   )}; path=/;`;

//                   // Notify all subscribers with the new token
//                   onRefreshed(newAccessToken);
//                   isRefreshing = false;
//                 } else {
//                   clearSession();
//                 }
//               } catch (error) {
//                 console.error("Error refreshing token:", error);
//                 clearSession();
//               } finally {
//                 isRefreshing = false;
//               }
//             }

//             // Wait for the token to be refreshed
//             return new Promise((resolve) => {
//               subscribeToTokenRefresh((newToken) => {
//                 config.headers["Authorization"] = `Bearer ${newToken}`;
//                 resolve(config);
//               });
//             });
//           } else {
//             // Attach token to request headers
//             config.headers["Authorization"] = `Bearer ${userData.access_token}`;
//           }
//         } catch (error) {
//           console.error("Error in request interceptor:", error);
//           clearSession();
//         }
//       } else {
//         clearSession();
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   return axiosInstance;
// };

// export default useAxios;



// ------- Without refresh token worked ----------------------- //

import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from 'jwt-decode';
import Router from "next/router"; // To handle redirection
import { GetUserData } from "../utils/GetUserData";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASEURL;

let sessionExpired = false;

const useAxios = () => {
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
      const decodedToken = jwtDecode(token);  // Use the correct function
      const currentTime = Date.now() / 1000;  // Current time in seconds
      return decodedToken.exp < currentTime;  // Compare with expiration time
    } catch (error) {
      console.error('Error decoding token:', error);
      return true;
    }
  };

  // Add Request Interceptor
  axiosInstance.interceptors.request.use(
    async (config) => {
      const userData = await GetUserData();
      if (userData.access_token) {
        try {
          const isTokenExpired = tokenExpiredCheck(userData.access_token)
          console.log("isTokenExpired ---- ", isTokenExpired);

          if (isTokenExpired && !sessionExpired) {
            sessionExpired = true;
            localStorage.clear();
            document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
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

export default useAxios;