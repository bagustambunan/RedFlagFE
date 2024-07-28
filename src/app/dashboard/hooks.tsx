import { post } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { Food, FoodListType } from "./types";

export default function useGetFood() {
  const [data, setData] = useState<Food[]>();
  const [dataFoodCat, setDataFoodCat] = useState<string[]>([]);
  const token = localStorage.getItem("token");

  async function handleGetFoodList() {
    const res = await post({ url: "/food", params: { token } });
    setData(res.data.food);
  }

  async function handleGetFoodCat() {
    const res = await post({ url: "/foodCat", params: { token } });
    setDataFoodCat(res.data.foodCat);
  }

  type UpdateBMIType = {
    bb: number;
    tb: number;
    foodCat: string;
  };
  async function updateFoodPreference(args: UpdateBMIType) {
    const { bb, tb, foodCat } = args;
    await post({ url: "/updateBMI", params: { token, bb, tb } });
    await post({
      url: "/setUserFavFoodCat",
      params: { token, foodCat: foodCat },
    });
  }

  async function getUserFavFood() {
    await post({ url: "/userFavFoodCat", params: { token } });
  }

  useEffect(() => {
    handleGetFoodList();
  }, []);

  return {
    handleGetFoodCat,
    data,
    setData,
    updateFoodPreference,
    getUserFavFood,
    dataFoodCat,
    setDataFoodCat,
    handleGetFoodList,
  };
}
