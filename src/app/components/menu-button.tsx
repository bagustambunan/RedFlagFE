import React from "react";
import HomeOutlined from "@ant-design/icons/lib/icons/HomeOutlined";
import { Button, Row } from "antd";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";

export default function MenuButton() {
  const MenuButtons = [
    { title: "Home", icon: <HomeOutlined /> },
    { title: "Menu", icon: <MenuOutlined /> },
    { title: "Profile", icon: <UserOutlined /> },
  ];
  return (
    <Row
      className='bg-white fixed bottom-0 h-15 py-2 px-5 shadow-inner shadow-gray-100 w-[480px]'
      justify={"space-between"}
    >
      {MenuButtons.map((btn) => (
        <Button>{btn.icon}</Button>
      ))}
    </Row>
  );
}
