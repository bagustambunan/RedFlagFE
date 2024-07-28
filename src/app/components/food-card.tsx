import { Typography, Row, Col, Divider, Flex, Tag } from "antd";
import Image from "next/image";
import React, { CSSProperties } from "react";
import dummyImage from "../../../public/chef.png";

export type FoodCardType = {
  title?: string;
  cal?: number;
  fodcat?: string[];
};

const FoodCard: React.FC<FoodCardType> = (args: FoodCardType) => {
  const { Text } = Typography;
  const { cal, fodcat, title } = args;

  return (
    <div className='shadow-md p-2 rounded-lg mt-2 bg-[#18191a]'>
      <Row gutter={[24, 24]}>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Image
            src={dummyImage}
            alt='logo'
            className='mt-2'
            height={100}
            width={100}
          />
        </Col>
        <Col xs={18} sm={18} md={18} lg={18} className='pt-3'>
          <Text style={styles.title}>{title}</Text>
          <br />
          <Text style={styles.subtitle}>Estimate Cal: {cal}</Text>
          <br />
          <Flex gap='4px 0' wrap className="mt-3">
            {fodcat?.map((item) => (
              <Tag color='green'>{item}</Tag>
            ))}
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  title: {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#f3b765",
  },
  subtitle: {
    fontSize: "0.8rem",
    color: "#f3b765",
    marginBottom: "1rem",
  },
};

export default FoodCard;
