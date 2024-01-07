import React from "react";
import SearchBar from "../components/SearchBar";
import DisplayChart from "../components/DisplayChart";
import SideBar from "../components/SideBar";
const HomeLayout = () => {
  return (
    <div className="flex w-full gap-4  ">
      <div className="w-9/12 flex-col border border-red-600">
        <SearchBar />
        <DisplayChart />
      </div>
      <div className="w-3/12 bg-white p-5 border border-green-600">
        <SideBar />
      </div>
    </div>
  );
};

export default HomeLayout;
