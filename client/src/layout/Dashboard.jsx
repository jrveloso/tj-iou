import React from "react";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Navbar />
      <Outlet />
      <BottomNav />
    </div>
  );
};

export default Dashboard;
