import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <main className="min-h-screen bg-[#FAFBFF]">
      <div className="container mx-auto px-4 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
