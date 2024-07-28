"use client";

import React, { CSSProperties } from "react";
import { Button, Form, Input } from "antd";
import useLogin from "./hooks";
import Link from "next/link";
import LoginImage from "../../../public/salad.png";
import Image from "next/image";
import { COLOR } from "../constants";

export default function Page() {
  const { form, handleSubmit, loading } = useLogin();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <center>
          <Image
            width={150}
            height={40}
            style={{ marginBottom: 12 }}
            src={LoginImage}
            className='image-responsive'
            alt='Logo'
          />
        </center>
        <p style={styles.subtitle}>
          Red Flag is your best partner in recommending healthy food choices.
        </p>
        <Form
          form={form}
          layout='vertical'
          onFinish={handleSubmit}
          style={styles.form}
        >
          <Form.Item
            name='email'
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input placeholder='Enter Email' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder='Enter Password' />
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              loading={loading}
              style={styles.loginButton}
            >
              Login
            </Button>
            <Link href='/signup'>
              <Button
                type='primary'
                htmlType='button'
                style={styles.loginButton}
              >
                Sign Up
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: COLOR.bgColor,
  },
  card: {
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    backgroundColor: COLOR.secColor,
    maxWidth: "400px",
    width: "100%",
    textAlign: "center" as "center", // Explicitly setting the type here
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: COLOR.acColor,
  },
  subtitle: {
    fontSize: "1rem",
    color: COLOR.acColor,
    marginBottom: "1rem",
  },
  form: {
    width: "100%",
  },
  forgotPassword: {
    float: "right",
    color: COLOR.acColor,
  },
  loginButton: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: COLOR.acColor,
    borderColor: COLOR.acColor,
  },
  socialButtons: {
    margin: "1rem 0",
  },
  socialButton: {
    width: "100%",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: "0.875rem",
    color: COLOR.acColor,
  },
};
