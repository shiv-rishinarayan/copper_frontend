

import axios from "axios";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import Router from "next/router"; // To handle redirection
import { GetUserData } from "../utils/GetUserData";
import { BASE_URL } from "../api/platinumAPI";


const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      Accept: "*/*",
    },
  });

  return axiosInstance;
};

export default useAxios;
