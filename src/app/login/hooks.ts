"use client";

import { Form } from "antd";
import { LoginFormFields } from "./types";
import { post } from "@/utils/api";
import { useState } from "react";

const useLogin = () => {
  const [form] = Form.useForm<LoginFormFields>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);

    const values = await form.validateFields();
    const res = await post({
      url: "/login",
      params: values,
    });
    
    setLoading(false);
  };

  return {
    form,
    handleSubmit,
    loading,
  };
};

export default useLogin;
