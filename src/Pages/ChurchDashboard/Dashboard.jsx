/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../Modals/Navbar';
import Sidebar from '../../Modals/Sidebar';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaUserCheck } from 'react-icons/fa';
import { BsCalendarDateFill } from 'react-icons/bs';
import { MdEventAvailable } from 'react-icons/md';

const Dashboard = () => {
  const [titleApp, setTitleApp] = useState('Home');
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case '/dashboard':
        setTitleApp('Home');
        break;
      case '/dashboard/attendance':
        setTitleApp('Attendance');
        break;
      case '/dashboard/events':
        setTitleApp('Events');
        break;
      default:
        setTitleApp('Home');
        break;
    }
  }, [location.pathname]);

  return (
    <div className="max-w-[1940px]  bg-[#24244e] mx-auto shadow-card">
      <div className="flex flex-col ">
        <div className="flex flex-col h-[100dvh] justify-between w-full">
          <div>
            <Navbar title={titleApp} />
            <div className="md:h-[90dvh] overflow-y-scroll new mt-[-20px] md:mt-[-100px]">
              <Outlet />
            </div>
          </div>
          <div className="max-w-[1940px]  w-full flex justify-between lg:px-[142px] pt-3 pb-4 bottom-0 fixed bg-[#2E2E44] ">
            <NavLink
              to="/"
              className="flex flex-col items-center   rounded gap-[8px] h-[48px] px-2 text-[12px] font-medium  "
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '500' : '500',
                  color: isActive ? '#fff' : '#151529',
                };
              }}
            >
              <FaUserCheck className="text-[24px]" />
              Home
            </NavLink>
            <NavLink
              to="attendance"
              className="flex flex-col items-center   rounded gap-[8px] h-[48px] px-2 text-[12px] font-medium  "
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '500' : '500',
                  color: isActive ? '#fff' : '#151529',
                };
              }}
            >
              <FaUserCheck className="text-[24px]" />
              {/*           <img src={check} alt="gccclogo" width={"px2rem(24)"} height={"px2rem(24)"} />
               */}{' '}
              Attendance{' '}
            </NavLink>
            <NavLink
              to="/profile"
              className="flex flex-col items-center   rounded gap-[8px] h-[48px] px-2 text-[12px] font-medium  "
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '500' : '500',
                  color: isActive ? '#fff' : '#151529',
                };
              }}
            >
              <FaUserCheck className="text-[24px]" />
              Profile
            </NavLink>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
