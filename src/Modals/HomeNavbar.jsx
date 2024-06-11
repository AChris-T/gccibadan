/* eslint-disable react/prop-types */
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom"
import profile from "../../src/assets/Images/user.png"
import logo from "../assets/Images/logo.png"
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';


const HomeNavbar = ({loggedInUser}) => {
  const authUser = JSON.parse(localStorage.getItem("GCCC_ATTENDANCE"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [active,setactive] = useState(false);
  const open = Boolean(anchorEl);
  window.addEventListener("scroll",function(){
    if(this.window.scrollY > 100){
      setactive(true)
    }else{
      setactive(false)
    }

  })
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div className={`${active ? "transition duration-700 max-w-[1440px] mx-auto bg-white fixed shadow-lg top-0  -translate-y-1 h-20" : ""} flex max-w-[1440px] z-20 w-full    h-24 justify-between gap-8 transition  md:px-16 md:mr-16 items-center`}>
        <NavLink to="/">
        <img src={logo} alt="logo" width={'201px'} height={'56px'}/>
        </NavLink>
        <div className="lg:flex hidden gap-6 text-lg font-normal text-[#7A797E]">
            <NavLink to="/"
               style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Home
            </NavLink>
            <NavLink to="/home/about"
               style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            About
            </NavLink>
            <NavLink to="/home/sermon"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Sermon
            </NavLink>
            <NavLink to="home/Testimony"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Testimony
            </NavLink>
            <NavLink to="/home/give"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Give
            </NavLink>
            <NavLink to="/home/events"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Events
            </NavLink>
            {loggedInUser ? (

            <NavLink to="/dashboard/attendance"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Attendance
            </NavLink>
            )
            :null
            }
        </div>
        <div className="mr-5">
        {loggedInUser ? (
          
          <div className="flex items-center">
        <div className="flex flex-col items-start justify-start">
          <p2 className=" text-[#120F14] leading-5 text-[8px] md:text-[14px] font-medium">{authUser["First Name"]}</p2>
{/*           <p2 className=' text-[#42394A] mt-[-px2rem(5)] md:mt-[px2rem(0)] leading-4 text-[7.px2rem(59)] md:text-[px2rem(12)] font-normal'>Music team</p2>
 */}        </div>
        <img src={profile} alt={profile} width={'20px'} height={'20px'}/>
        <div className='flex lg:hidden ml-[-10px]'>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}

      >
        <ArrowDropDownIcon/>
      </IconButton>
      <Menu
        
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
        <NavLink to="/home/about"
               style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            About
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="/home/sermon"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Sermon
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}> <NavLink to="home/Testimony"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Testimony
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <NavLink to="/home/give"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Give
            </NavLink>
          </MenuItem>
      <MenuItem onClick={handleClose}>
      {loggedInUser ? (
      <NavLink to="/dashboard/attendance"
        style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "black" : "",
          };
      }}
        >
        Attendance
      </NavLink>
      )
      :null
      }
      </MenuItem>
      <MenuItem onClick={handleClose}>
      <NavLink to="/home/events"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Events
            </NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
      <NavLink to="/login"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Login
            </NavLink>
      </MenuItem>

      </Menu>
      </div>
        </div>
        ):(
          <div className="flex items-center  ">
        <div className="flex flex-col items-start justify-start">
          <p2 className=" text-[#120F14] leading-5 text-[8px] md:text-[14px] font-medium"></p2>
{/*           <p2 className=' text-[#42394A] mt-[-px2rem(5)] md:mt-[px2rem(0)] leading-4 text-[7.px2rem(59)] md:text-[px2rem(12)] font-normal'>Music team</p2>
 */}        </div>
           <NavLink to='/login' className='bg-[#18181A] text-[#fefefe] px-9 py-4 hidden lg:flex rounded-sm text-base font-semibold '>Login</NavLink>
        <img src={profile} alt={profile} width={'20px'} height={'20px'} className='lg:hidden md:flex' />
        <div className='flex lg:hidden ml-[-10px]'>
        <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}

      >
        <ArrowDropDownIcon/>
      </IconButton>
      <Menu sx={{ width: 320 }}
       style={{width:"300px",padding:"30px"}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: '20ch',
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      <MenuItem onClick={handleClose}>
        <NavLink to="/"
               style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Home
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="/home/about"
               style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            About
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <NavLink to="/home/sermon"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Sermon
            </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}> <NavLink to="home/Testimony"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Testimony
            </NavLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
          <NavLink to="/home/give"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Give
            </NavLink>
          </MenuItem>
      <MenuItem onClick={handleClose}>
      <NavLink to="/home/events"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Events
            </NavLink>
      </MenuItem>
      <MenuItem onClick={handleClose}>
      <NavLink to="/login"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Login
            </NavLink>
      </MenuItem>

      </Menu>
      </div>
        </div>
        )
        }
        </div>
    </div>
  )
}

export default HomeNavbar
