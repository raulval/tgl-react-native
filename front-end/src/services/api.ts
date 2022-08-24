import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_BASE_URL } from "react-native-dotenv";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export default api;

api.interceptors.request.use(
  async (config) => {
    const token =
      (await AsyncStorage.getItem("userToken")) !== null &&
      (await AsyncStorage.getItem("userToken"));

    if (token) {
      config.headers!.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
