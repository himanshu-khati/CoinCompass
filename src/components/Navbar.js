import React from "react";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-inner sticky top-0  mb-1 ">
      <nav className="flex justify-between items-center ">
        <img src={logo} alt="" className="w-[150px] my-2 " />
      </nav>
    </header>
  );
};

export default Navbar;
