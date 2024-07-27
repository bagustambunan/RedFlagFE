"use client";

import { Form, message } from "antd";
import { checkSuccess, post } from "@/utils/api";
import { useEffect, useState } from "react";
import { RegisterFormFields } from "./types";
import useUser from "@/hooks/userUser";
import { useRouter } from "next/navigation";

const useRegiter = () => {
  const [form] = Form.useForm<RegisterFormFields>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { isLogin } = useUser();

  const handleSubmit = async () => {
    setLoading(true);

    const values = await form.validateFields();
    const res = await post({
      url: "/register",
      params: {
        fullName: values.name,
        phoneNo: values.phone,
        email: values.email,
        password: values.password,
      },
    });
    if (checkSuccess(res?.rc)) {
      router.push("/login");
      message.success("Account created successfully");
    }

    setLoading(false);
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

export default useRegiter;
