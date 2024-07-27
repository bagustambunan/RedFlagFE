import { FloatButton } from "antd";
import Image from "next/image";
import React from "react";

export type FoodCardType = {
  title: string;
  price: string;
};
export default function FoodCard(props: FoodCardType) {
  const { price, title } = props;
  return (
    <div className='shadow-md p-2 rounded-lg'>
      <Image src={"/logo.png"} alt='logo' height={100} width={100} />
      <p>{title}</p>
      <p>{price}</p>
      <FloatButton />
    </div>
  );
}
