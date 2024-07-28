import { Menu } from "antd";
import { Footer } from "antd/es/layout/layout";
import React, { PropsWithChildren } from "react";
import MenuButton from "./menu-button";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='w-full h-screen bg-gray-200 flex justify-center flex-row'>
      <div
        className='bg-[#242526] flex items-center flex-col p-4 gap-4'
        style={{ width: 480, height: "100%", overflow: "scroll" }}
      >
        {children}
        <MenuButton />
      </div>
    </div>
  );
}
