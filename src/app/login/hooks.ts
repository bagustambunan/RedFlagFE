"use client";

import { Form } from "antd";
import { LoginFormFields } from "./types";
import { post } from "@/utils/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useUser from "@/hooks/userUser";

const useLogin = () => {
  const [form] = Form.useForm<LoginFormFields>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { isLogin } = useUser();

  const handleSubmit = async () => {
    setLoading(true);

    const values = await form.validateFields();
    const res = await post({
      url: "/login",
      params: values,
    });
    setLoading(false);

    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    if (isLogin) router.push("/dashboard");
  }, [isLogin]);

  return {
    form,
    handleSubmit,
    loading,
  };
};

export default useLogin;
