
/* eslint-disable react/prop-types */
//import React from 'react'
import profile from "../../src/assets/Images/bg_1.jpg"
import { IoMdArrowDropdown } from "react-icons/io";
import { Popover, Text, Button } from '@mantine/core';
import gccclogo from "../assets/Images/gccc_logo2.png"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({title}) => {
  const navigate = useNavigate();

  const handleClearLocalStorage = () => {
    localStorage.clear();
    // Optionally, you can perform additional actions after clearing localStorage
    navigate("/login");
    toast.error('Have a nice day',{
      position: "top-right",
  });
  };
  return (
  <div className="flex justify-between h-20 items-center px-4">
      <img src={gccclogo} alt='gccclogo' className="md:hidden"/>
      <h1 className="hidden capitalize md:block text-2xl font-bold text-black-ercas">
        {title}
      </h1> 
      <Popover withArrow shadow="md">
      <Popover.Target>
        <Button className="flex">
        <div className="flex gap-1 items-center">
        <img src={profile} alt="Userpicture" className="w-8 h-8 object-cover rounded-full"/>
        <IoMdArrowDropdown className="text-blue-800 cursor-pointer"/>
        </div>
        <Popover.Dropdown className="flex justify-end flex-col absolute gap-1 py-3  w-[40px] px-2 bg-blue-700 text-[white] rounded-sm border-blue-700 border-[1px]">
        <Text size="xs" className="px-4 hover:text-[#ffffffe7]">
        <a href="">
        Edit Profile
        </a>
        </Text>
        <Text className="px-4 hover:text-[#ffffffe7]">

        <a href="" onClick={handleClearLocalStorage}>
        Sign out
        </a>
        </Text>
      </Popover.Dropdown>
      </Button>
      </Popover.Target>
   
    </Popover>

    </div>
  )
}

export default Navbar
