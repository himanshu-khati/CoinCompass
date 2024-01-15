import React from "react";
import SearchBar from "../components/SearchBar";
import DisplayChart from "../components/DisplayChart";
import SideBar from "../components/SideBar";
import Portfolio from "../components/Portfolio";
import CoinsExchange from "../components/CoinsExchange";
const HomeLayout = () => {
  return (
    <div className="flex w-full gap-4 p-6  ">
      <div className="w-9/12 flex-col  ">
        <SearchBar />
        <DisplayChart />
        <div className="flex my-2  w-full">
          <Portfolio />
          <CoinsExchange />
        </div>
      </div>
      <div className="w-3/12 bg-white p-3 shadow rounded-lg">
        <SideBar />
      </div>
    </div>
  );
};

export default HomeLayout;
