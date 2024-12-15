"use server";

import authApi from "@/services/api/auth.api";
import { cookies } from "next/headers";

export const getNewATAction = async () => {
  try {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get("refreshToken")?.value;
    const response = await authApi.getNewAT({ refreshToken: refreshToken! });

    return {
      message: response.message,
      success: true,
      accessToken: response.result?.accessToken,
      refreshToken: response.result?.refreshToken,
    };
  } catch (error) {
    throw error;
  }
};
