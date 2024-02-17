/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Modals/Navbar";
import Sidebar from "../../Modals/Sidebar";

const Dashboard = () => {
  const [titleApp, setTitleApp] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setTitleApp("Home");
        break;
      case "/dashboard/attendance":
        setTitleApp("Attendance");
        break;
      case "/dashboard/events":
        setTitleApp("Events");
        break;
      default:
        setTitleApp("Home");
        break;
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="bg-[#F9FAFB] max-w-[1460px] mx-auto shadow-card overflow-x-hidden">
        <div className="flex">
          <div className="flex-none w-56 bg-white hidden md:flex ">
            <Sidebar />
          </div>
          <div className="flex-auto w-full h-[100vh]">
            <Navbar title={titleApp} />
            <Outlet />
            <div className="hidden lg:block">
              {/* <Footer/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
