import React, { useEffect } from "react";

const SidebarShimmer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" w-full   overflow-hidden hide-scroll overflow-y-scroll">
      <h2 className="text-gray-900 py-3 text-md font-semibold">
        Cryptocurrency By Market Cap
      </h2>
      <div className="min-h-[850px] bg-gray-300 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default SidebarShimmer;
