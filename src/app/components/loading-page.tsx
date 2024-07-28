import { Flex, Spin } from "antd";
import React from "react";

export default function LoadingPage() {
  return (
    <div>
      <Flex justify='center' align='center'>
        <Spin className="mt-20" />
      </Flex>
    </div>
  );
}
