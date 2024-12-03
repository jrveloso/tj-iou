import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default Dashboard;
