import axios from "axios";
import * as jose from "jose";
import { useEffect } from "react";

const BASE_URL = "http://localhost:9980/api/v1";
const REFRESH_TOKEN = "http://localhost:9980/api/v1/refresh";

const axiosInstance = axios.create({ baseURL: BASE_URL });

export const useAxios = () => {
  const refresh = useRefreshToken();
  useEffect(() => { });
};

export const useRefreshToken = () => {
  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    console.log(response.data.accessToken);
    return response.data.accessToken;
  };

  return <div></div>;
};

