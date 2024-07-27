"use client";

import React from "react";
import Layout from "../components/layout";
import { Button, Form, Image, Input, Space } from "antd";
import useLogin from "./hooks";

export default function page() {
  const { form, handleSubmit, loading } = useLogin();

  return (
    <Layout>
      <Image
        src="/logo.png"
        alt="Logo"
        width={100}
        height={100}
        preview={false}
      />
      <Form
        form={form}
        labelCol={{ span: 8 }}
        labelAlign="left"
        className="w-full"
      >
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button onClick={handleSubmit} type="primary" loading={loading}>
              Login
            </Button>
            <Button href="/signup">Sign Up</Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
}
