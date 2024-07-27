"use client";

import { Form } from "antd";
import { post } from "@/utils/api";
import { useState } from "react";
import { RegisterFormFields } from "./types";

const useRegiter = () => {
  const [form] = Form.useForm<RegisterFormFields>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);

    const values = await form.validateFields();
    const res = await post({
      url: "/register",
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

export default useRegiter;
