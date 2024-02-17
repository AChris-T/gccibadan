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
    <div className="max-w-[1440px] mx-auto shadow-card">
    <div className="flex flex-col  lg:grid lg:grid-cols-5 xl:grid-cols-6  ">
      <div className=" hidden pb-5   lg:block h-[100vh]  sticky  top-0 ">
        <div className=" ">
          <Sidebar />
        </div>
      </div>
      <div className="navbar-content  lg:col-span-4 xl:col-span-5">
            <div className="navbar  border z-20 sticky top-0">
            <div className="navbar  border z-20 sticky top-0 bg-white">
            <Navbar title={titleApp} />
            </div>
            <div className="">
            <Outlet />
            </div>
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
