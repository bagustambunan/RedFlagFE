"use client";

import React, { CSSProperties, useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import FoodCard from "../components/food-card";
import Preference from "../components/preference";
import { Affix, Row, Space, Typography, Col, Select, SelectProps } from "antd";
import useGetFood from "./hooks";
import LoadingPage from "../components/loading-page";
import { COLOR } from "../constants";
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const { Text } = Typography;
  const { data, loading, getUserFavFood, userFavFood, bmiUpdated } =
    useGetFood();
  const hasBMI = localStorage.getItem("bmi") || false;
  // const [favFood, setFavfood] = useState<string[]>([]);
  const route = useRouter()

  const options: SelectProps["options"] = userFavFood.map((item) => {
    return {
      label: item,
      value: item,
    };
  });

  if(!hasBMI) route.push("/bmi")
  if (loading) return <LoadingPage />;

  function handleMultipleSelection(val: string[]) {
    console.log(val);
    // setFavfood(val)
  }

  return (
    <div>
      <Layout>
        {hasBMI ? (
          <Space ref={setContainer}>
            <Affix target={() => container}>
              <Row justify={"center"} className='text-center'>
                <h2 style={styles.title}>RedFlag Apps</h2>
                <Text style={styles.subtitle}>
                  Hello, what would you like to eat today? Here are our
                  recommended dishes.
                </Text>
                <Select
                  mode='multiple'
                  // value={userFavFood}
                  allowClear
                  style={{ width: "100%" }}
                  options={options}
                  onChange={(val) => handleMultipleSelection(val)}
                />
              </Row>
              <Row justify={"center"} className='w-100'>
                {data?.map((food) => (
                  <Col xs={24} sm={24} md={24} lg={24} key={food.foodID}>
                    <FoodCard
                      key={food.foodID}
                      title={food.foodName}
                      cal={food.foodCal}
                      fodcat={food.foodCat}
                    />
                  </Col>
                ))}
              </Row>
            </Affix>
          </Space>
        ) : (
          // <Preference />
          <></>
        )}
      </Layout>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#f3b765",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#f3b765",
    marginBottom: "1rem",
  },
};
