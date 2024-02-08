// Root layout page
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <main className="min-h-screen border border-green-700 bg-[#FAFBFF]">
      <div className="container flex flex-col mx-auto px-4 ">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
