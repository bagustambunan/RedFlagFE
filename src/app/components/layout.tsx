import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-screen bg-gray-200 flex justify-center flex-row">
      <div
        className="bg-white flex items-center flex-col p-4 gap-4"
        style={{ width: 400 }}
      >
        {children}
      </div>
    </div>
  );
}
