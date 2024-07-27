import React from "react";
import Layout from "../components/layout";
import Image from "next/image";
import FoodCard, { FoodCardType } from "../components/food-card";

export default function Dashboard() {
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
  ];
  return (
    <div>
      <Layout>
        <Image src={"/logo.png"} alt='logo' width={50} height={50} />
        {true ? (
          products.map((food) => (
            <FoodCard title={food.title} price={food.price} />
          ))
        ) : (
          <p>
            Hello, Name..., Please fill the form for best experience please add
            form here
          </p>
        )}
      </Layout>
    </div>
  );
}
