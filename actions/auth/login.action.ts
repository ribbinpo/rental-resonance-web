"use server";

import axios from "axios";
import { cookies } from "next/headers";

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
    const cookieStore = await cookies();
    const response = await axiosWithoutToken.post<
      SuccessHandler<LoginResponse>
    >("/auth/login", {
      email,
      password,
    });

    cookieStore.set("accessToken", response.data.result?.accessToken!);
    cookieStore.set("refreshToken", response.data.result?.refreshToken!);

    return { message: response.data.message, success: true };
  } catch (error) {
    if (axios.isAxiosError<ErrorHandler>(error)) {
      throw JSON.stringify(error.response?.data);
    }

    throw error;
  }
};
