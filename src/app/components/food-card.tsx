import { Typography, Row, Col } from "antd";
import Image from "next/image";
import React, { CSSProperties } from "react";
import dummyImage from '../../../public/chef.png';

export type FoodCardType = {
  title: string;
  price: string;
};

const FoodCard: React.FC<FoodCardType> = ({ title, price }) => {
  const { Text } = Typography;

  return (
    <div className="shadow-md p-2 rounded-lg mt-2">
      <Row gutter={[24, 24]}>
        <Col xs={6} sm={6} md={6} lg={6}>
          <Image src={dummyImage} alt='logo' className="mt-2" height={100} width={100} />
        </Col>
        <Col xs={18} sm={18} md={18} lg={18} className="pt-3">
          <Text style={styles.title}>{title}</Text>
          <br />
          <Text style={styles.subtitle}>{price}</Text>
          <br />
          <Text style={styles.subtitle}>Another subtitle or information</Text>
        </Col>
      </Row>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  title: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#d62828',
  },
  subtitle: {
    fontSize: '0.8rem',
    color: '#6c757d',
    marginBottom: '1rem',
  },
};

export default FoodCard;
