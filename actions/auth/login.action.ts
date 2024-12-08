"use server";

import axios from "axios";

import { LoginValidation } from "@/services/validation/login.validation";
import { ErrorHandler } from "@/utils/response/";
import { axiosWithoutToken } from "@/configs/axios.config";
import { SuccessHandler } from "@/types/response";

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export const authLoginAction = async (formData: LoginValidation) => {
  const { email, password } = formData;

  try {
    const response = await axiosWithoutToken.post<
      SuccessHandler<LoginResponse>
    >("/auth/login", {
      email,
      password,
    });

    return { message: response.data.message, success: true };
  } catch (error) {
    if (axios.isAxiosError<ErrorHandler>(error)) {
      throw JSON.stringify(error.response?.data);
    }

    throw error;
  }
};
