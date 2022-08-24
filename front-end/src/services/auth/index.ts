import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import {
  IBodyAuth,
  ILoginResponse,
  IResetResponse,
} from "../../shared/interfaces";
import { IChangePasswordResponse } from "../../shared/interfaces/AuthInterfaces";
import { IAuth } from "./interfaces";

const auth = (): IAuth => {
  const login = async (body: IBodyAuth): Promise<ILoginResponse> => {
    return api.post("login", body);
  };
  const reset = async (body: IBodyAuth): Promise<IResetResponse> => {
    return api.post("reset", body);
  };
  const changePassword = async (
    body: IBodyAuth
  ): Promise<IChangePasswordResponse> => {
    const resetToken =
      (await AsyncStorage.getItem("resetToken")) !== null &&
      (await AsyncStorage.getItem("resetToken"));
    return api.post(`reset/${resetToken}`, body);
  };

  return { login, reset, changePassword };
};

export default auth;
