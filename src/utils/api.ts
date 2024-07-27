import { message } from "antd";
import axios from "axios";

type TRequest = {
  url: string;
  params?: any;
};

type TResponse = {
  data?: any;
  message?: string;
  rc?: string;
};

const axiosInstance = axios.create({
  baseURL: "https://8681-103-111-210-26.ngrok-free.app",
  timeout: 5000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const successCodes = ["200", "00"];
export const checkSuccess = (code?: string) =>
  !code ? false : successCodes.includes(code);

export const post = async ({ url, params }: TRequest): Promise<TResponse> =>
  await axiosInstance
    .post(url, { ...params })
    .then((res) => {
      if (!checkSuccess(res?.data?.rc)) message.error(res?.data?.message);
      return res.data;
    })
    .catch((err) => {
      message.error(err.message);
    });
