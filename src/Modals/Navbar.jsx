
/* eslint-disable react/prop-types */
//import React from 'react'
import profile from "../../src/assets/Images/bg_1.jpg"
import { IoMdArrowDropdown } from "react-icons/io";
import { Popover, Text, Button } from '@mantine/core';
import gccclogo from "../assets/Images/gccc_logo2.png"

const Navbar = ({title}) => {
  return (
  <div className="flex justify-between h-20 items-center px-4">
      <img src={gccclogo} alt='gccclogo' className="md:hidden"/>
      <h1 className="hidden capitalize lg:block text-2xl font-bold text-black-ercas">
        {title}
      </h1> 
      <Popover withArrow shadow="md">
      <Popover.Target>
        <Button className="flex">
        <div className="flex gap-1 items-center">
        <img src={profile} alt="Userpicture" className="w-8 h-8 object-cover rounded-full"/>
        <IoMdArrowDropdown className="text-blue-800 cursor-pointer"/>
        </div>
        <Popover.Dropdown className="flex bg-red-300 justify-end absolute mr-4 w-[40px]">
        <Text size="xs">
        <a href="">
        Edit Profile
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
