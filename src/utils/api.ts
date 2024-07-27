import { message } from "antd";
import axios from "axios";

type TRequest = {
  url: string;
  params?: any;
};

type TResponse = {
  loading: boolean;
  data: any;
};

const axiosInstance = axios.create({
  baseURL: "https://243a-103-111-210-26.ngrok-free.app",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const post = async ({ url, params }: TRequest): Promise<TResponse> =>
  await axiosInstance
    .post(url, { ...params })
    .then((res) => {
      if (res.data.rc !== 200) message.error(res.data.message);

      return res.data;
    })
    .catch((err) => {
      message.error(err.message);
    });
