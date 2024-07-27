"use client";

import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import FoodCard, { FoodCardType } from "../components/food-card";
import Preference from "../components/preference";
import { Affix, Row, Space, Typography } from "antd";
import useGetFood from "./hooks";

export default function Dashboard() {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const { Text } = Typography;
  const { data } = useGetFood();

  const products: FoodCardType[] = [
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
    {
      title: "Nasi Bakar Mak lampir",
      price: "300.000",
    },
  ];
  return (
    <div>
      <Layout>
        <Image src={"/logo.png"} alt='logo' width={50} height={50} />
        {true ? (
          <Space ref={setContainer}>
            <Affix target={() => container}>
              <Row justify={"center"}>
                <Text>
                  Hi .... anything to eat today, here our recommendations
                </Text>
                {data?.map((food) => (
                  <FoodCard
                    key={food.foodID}
                    title={food.foodName}
                    price={food.foodCal?.toString()}
                  />
                ))}
              </Row>
            </Affix>
          </Space>
        ) : (
          <Preference />
        )}
      </Layout>
    </div>
  );
}
