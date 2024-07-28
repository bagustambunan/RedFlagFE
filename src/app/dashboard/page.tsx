"use client";

import React, { CSSProperties } from "react";
import Layout from "../components/layout";
import Image from "next/image";
import FoodCard, { FoodCardType } from "../components/food-card";
import Preference from "../components/preference";
import { Affix, Row, Space, Typography, Col } from "antd";
import cookingImage from "../../../public/cooking.png";
import useGetFood from "./hooks";

export default function Dashboard() {
  const [container, setContainer] = React.useState<HTMLDivElement | null>(null);
  const { Text } = Typography;
  const { data } = useGetFood();


  return (
    <div>
      <Layout>
        {true ? (
          <Space ref={setContainer}>
            <Affix target={() => container}>
              <Row justify={"center"} className='text-center'>
                <h2 style={styles.title}>RedFlag Apps</h2>
                <Text style={styles.subtitle}>
                  Hi .... anything to eat today, here our recommendations
                </Text>
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
          <Preference />
        )}
      </Layout>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  title: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#d62828",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#6c757d",
    marginBottom: "1rem",
  },
};
