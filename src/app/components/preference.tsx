"use client";

import {
  Button,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  SelectProps,
  Typography,
} from "antd";
import React from "react";

export default function Preference() {
  const { Text } = Typography;

  const options: SelectProps["options"] = [
    {
      label: "Ayam",
      value: "ayam",
    },
    {
      label: "Ikan",
      value: "ikan",
    },
    {
      label: "Roti & Kue",
      value: "roti&kue",
    },
    {
      label: "Telur",
      value: "telur",
    },
    {
      label: "Daging",
      value: "daging",
    },
  ];

  function handleFinish(values: any): void {
    console.log(values);
  }

  return (
    <Row gutter={16} justify='center' align='middle'>
      <Text>
        Hi.... name, Please fill form reference below for better experience :)
      </Text>

      <Form
        name='preference'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        autoComplete='off'
        className='mt-10'
        onFinish={handleFinish}
      >
        <Form.Item label='Berat Badan (BB)' name='bb'>
          <InputNumber className='w-full' />
        </Form.Item>
        <Form.Item label='Tinggi Badan (TB)' name={"tb"}>
          <InputNumber className='w-full' />
        </Form.Item>
        <Form.Item label='Makanan Favorit' name='favfood'>
          <Select mode='multiple' allowClear options={options} />
        </Form.Item>
        <Button htmlType='submit' type='primary'>
          Submit
        </Button>
      </Form>
    </Row>
  );
}
