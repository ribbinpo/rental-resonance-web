"use server";

import { cookies } from "next/headers";

export const authLogoutAction = async () => {
  try {
    const cookieStore = await cookies();

    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");

    return { message: "logout sucess", success: true };
  } catch (error) {
    throw error;
  }
};
