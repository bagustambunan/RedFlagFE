"use client";

import {
  Button,
  Form,
  InputNumber,
  Row,
  Select,
  SelectProps,
  Typography,
} from "antd";
import React from "react";
import useGetFood from "../dashboard/hooks";
import { COLOR } from "../constants";

export default function Preference() {
  const { data, updateFoodPreference, dataFoodCat } = useGetFood();
  const { Text } = Typography;

  const options: SelectProps["options"] = dataFoodCat.map((item) => {
    return {
      label: item[0],
      value: item[0],
    };
  });

  function handleFinish(values: any): void {
    updateFoodPreference({
      bb: values.bb,
      tb: values.tb,
      foodCat: JSON.stringify(values.favfood),
    });
  }
  return (
    <Row gutter={16} justify='center' align='middle'>
      <p style={{ color: "white" }}>
        Hi, Please fill form reference below for better experience :)
      </p>

      <Form
        name='preference'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 200 }}
        autoComplete='off'
        className='mt-10'
        onFinish={handleFinish}
      >
        <p style={{ color: "white" }}>Body Weight</p>
        <Form.Item name='bb' style={{ color: "yellow" }}>
          <InputNumber className='w-full' />
        </Form.Item>
        <p style={{ color: "white" }}>Body Height</p>
        <Form.Item name={"tb"}>
          <InputNumber className='w-full' />
        </Form.Item>
        <p style={{ color: "white" }}>Favorit Food</p>
        <Form.Item name='favfood'>
          <Select mode='multiple' allowClear options={options} />
        </Form.Item>
        <Button htmlType='submit' type='primary'>
          Submit
        </Button>
      </Form>
    </Row>
  );
}
