// layout for home page

import React from "react";
import SearchBar from "../components/SearchBar";
import DisplayChart from "../components/DisplayChart";
import SideBar from "../components/SideBar";
import Portfolio from "../components/Portfolio";
import CoinsExchange from "../components/CoinsExchange";
const HomeLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 lg:p-6  ">
      <div className=" w-full lg:w-9/12 flex-col  ">
        <SearchBar />
        <DisplayChart />
        <div className="flex lg:flex-row flex-col my-2  w-full">
          <Portfolio />
          <CoinsExchange />
        </div>
      </div>
      <div className="lg:w-3/12 w-full bg-white py-2 px-3 lg:p-3 shadow rounded-lg ">
        <SideBar />
      </div>
    </div>
  );
};

export default HomeLayout;
