"use client";
import { post } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { Food, FoodListType } from "./types";
import { notification } from "antd";
import { useRouter } from "next/navigation";

export default function useGetFood() {
  const [data, setData] = useState<Food[]>();
  const [dataFoodCat, setDataFoodCat] = useState<string[]>([]);
  const [userFavFood, setUserFavFood] = useState<string[]>([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [dataFilteredFavFood, setDataFilterFavFood] = useState<Food[]>([]);
  const [bmiUpdated, setBmiUpdated] = useState(false);
  const route = useRouter();

  async function handleGetFoodList() {
    setLoading(true);
    try {
      const res = await post({ url: "/food", params: { token } });
      setData(res.data.food);
    } catch (error) {
    } finally {
      setLoading(false);
    }
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
    notification.success({ message: "Update Successfull" });
    localStorage.setItem("bmi", "298.0");
    route.push("/dashboard");
  }

  async function getUserFavFood() {
    const res = await post({ url: "/userFavFoodCat", params: { token } });
    setUserFavFood(res.data.userFoodFavCat);
  }

  async function getUserFilteredFavFood() {
    const res = await post({ url: "/filterFood", params: { token } });
    setDataFilterFavFood(res.data);
  }

  useEffect(() => {
    handleGetFoodList();
    getUserFavFood();
    handleGetFoodCat();
    getUserFilteredFavFood();
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
    loading,
    userFavFood,
    setUserFavFood,
    bmiUpdated,
    getUserFilteredFavFood,
    dataFilteredFavFood
  };
}
