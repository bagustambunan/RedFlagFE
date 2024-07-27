"use client";

import React from "react";
import Layout from "../components/layout";
import { Button, Form, Image, Input, Space } from "antd";
import useRegiter from "./hooks";

export default function page() {
  const { form, handleSubmit, loading } = useRegiter();
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
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button onClick={handleSubmit} type="primary" loading={loading}>
              Sign Up
            </Button>
            <Button href="/login">Login</Button>
          </Space>
        </Form.Item>
      </Form>
    </Layout>
  );
}
