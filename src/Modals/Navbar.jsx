
/* eslint-disable react/prop-types */
//import React from 'react'
import profile from "../../src/assets/Images/user.png"
import menu from "../../src/assets/Images/menu.png"

import { Popover, Text, Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const authUser = JSON.parse(localStorage.getItem("GCCC_ATTENDANCE"));



  const handleClearLocalStorage = () => {
    localStorage.clear();
    // Optionally, you can perform additional actions after clearing localStorage
    navigate("/login");
    toast.error('Have a nice day',{
      position: "top-right",
  });
  };
  return (
  <div className="flex justify-between md:h-[108px] h-[59px] border-b-[#C4D6DE] border-b-[2px] items-center px-4">
      <h1 className="hidden capitalize md:block text-[24px] ml-2 leading-8 font-bold text-[#1B566F]">
      Hello,{authUser["First Name"]}
        </h1>
        <button className="md:hidden ml-2"><img src={menu} alt="menu"/></button> 
      <Popover withArrow shadow="md">
      <Popover.Target>
        <Button className="flex">
        <div className="flex gap-4 items-center">
        <div className="flex  flex-col justify-start items-start">
          <p2 className=" text-[#120F14] leading-5 text-[8px] md:text-[14px] font-medium">{authUser["Last Name"]} {authUser["First Name"]}</p2>
          <p2 className=' text-[#42394A] mt-[-5px] md:mt-[0px] leading-4 text-[7.59px] md:text-[12px] font-normal'>Music team</p2>
        </div>
        <img src={profile} alt="Userpicture" className="w-[18px] h-[18px] object-cover rounded-full"/>        </div>
        <Popover.Dropdown className="flex justify-end flex-col absolute gap-1 py-3  w-[40px] px-2 bg-blue-700 text-[white] rounded-sm border-blue-700 border-[1px]">
        <Text size="xs" className="px-4 hover:text-[#ffffffe7]">
        <a href="">
        Edit Profile
        </a>
        </Text>
        <Text className="px-4 hover:text-[#ffffffe7] md:hidden">

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
