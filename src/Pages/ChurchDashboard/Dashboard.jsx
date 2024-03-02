/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Modals/Navbar";
import Sidebar from "../../Modals/Sidebar";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { FaUserCheck } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";


const Dashboard = () => {
  const [titleApp, setTitleApp] = useState("Home");
  const location = useLocation();
  const [value, setValue] = React.useState(0);


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
    <div className="flex flex-col justify-between  md:grid md:grid-cols-5 xl:grid-cols-6  ">
      <div className=" hidden pb-5   md:block h-[100vh]  sticky  top-0 ">
        <div className=" ">
          <Sidebar />
        </div>
      </div>
      <div className="navbar-content  md:col-span-4 xl:col-span-5">
            <div className="navbar  border z-20 sticky top-0">
            <div className="navbar  border z-20 sticky top-0 bg-white">
            <Navbar title={titleApp} />
            </div>
            <div className="">            
            <Outlet />
            <div className="md:hidden justify-end sticky bg-slate-600">
              <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 ,height:"50px",display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%",paddingTop:"2px"}} >
              <NavLink to="/dashboard/home" className=" px-8 flex text-center items-center gap-1 text-sm flex-col"
           style={({ isActive,}) => {
            return {
            fontWeight: isActive ? "bold" : "",
            color: isActive? "blue":"", 
            };
            }}
          > 
       
          <FaUserCheck/>
            Home
        </NavLink>
        <NavLink to="/dashboard/attendance" className=" px-8 flex text-center items-center gap-1 text-sm flex-col"
           style={({ isActive,}) => {
            return {
            fontWeight: isActive ? "bold" : "",
            color: isActive? "blue":"", 
            };
            }}
          > 
       
       <BsCalendarDateFill/>
            Attendance
        </NavLink>
        <NavLink to="/dashboard/events" className="px-8 flex text-center items-center gap-1 text-sm flex-col"
          style={({ isActive,}) => {
            return {
            fontWeight: isActive ? "bold" : "",
            color: isActive? "blue":"", 
            };
            }}
        > 
       <MdEventAvailable />
            Events
        </NavLink>               {/* <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
              setValue(newValue);
            }}
            >
           <BottomNavigationAction label="Home"
             icon={<RestoreIcon />} 
             component={Link} to="/dashboard/home"
              value="/dashboard/home" 
             
              />
             <BottomNavigationAction label="Attendance"
              icon={<FavoriteIcon />}
              component={Link} to="/dashboard/attendance"
              value="/dashboard/attendance"
               selected={value === '/dashboard/attendance'} />
              
              <BottomNavigationAction label="Events" 
                icon={<LocationOnIcon />} 
                component={Link} to="/dashboard/events"
                 value="/dashboard/events" 
                selected={value === '/dashboard/events'} /> 
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} component={Link} to="/dashboard/home"/>
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} component={Link} to="/dashboard/attendance" />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} component={Link} to="/dashboard/events"/>
              </BottomNavigation>*/}
            </Box>
              </div>
            </div>
          
          </div>
          
        </div>
        
      </div>
      <div>
      </div>
      
      </div>
  );
};

export default Dashboard;
