import { Spin } from "antd";
import React from "react";
import DummyGraph from "./DummyGraph";
const Shimmer = () => {
  return (
    <Spin>
      <div className=" w-full overflow-hidden relative  animate-pulse">
        <DummyGraph />
      </div>
    </Spin>
  );
};

export default Shimmer;
