import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <header className="w-full py-3  bg-white shadow-inner sticky top-0 z-50 mb-1 ">
      <nav className="flex justify-between items-center ">
        <img src={logo} alt="" className="w-[100px]  lg:w-[150px] my-2  " />
      </nav>
    </header>
  );
};

export default Navbar;
