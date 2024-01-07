import React from "react";

const Navbar = () => {
  return(
    <header className="border w-full ">
      <nav className="flex justify-between items-center"> 
        <p>CRYPTOPILOT</p>
        <ul className="flex gap-2 ">
          <li>Home</li>
          <li>about</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;
