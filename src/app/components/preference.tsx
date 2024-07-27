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
