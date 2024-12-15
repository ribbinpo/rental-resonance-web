import { axiosWithoutToken } from "@/configs/axios.config";
import { ErrorHandler, SuccessHandler } from "@/utils/response";
import axios from "axios";

interface GetNewATResponse {
  accessToken: string;
  refreshToken: string;
}

const getNewAT = async (body?: { refreshToken: string }) => {
  try {
    const response = await axiosWithoutToken.post<
      SuccessHandler<GetNewATResponse>
    >("/auth/refresh-token", {
      refreshToken: body?.refreshToken,
    }, { withCredentials: true });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError<ErrorHandler>(error)) {
      throw JSON.stringify(error.response?.data);
    }

    throw error;
  }
};

const authApi = {
  getNewAT,
};

export default authApi;
