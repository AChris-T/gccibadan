//import * as React from 'react';
/* import Box from '@mui/material/Box';
 */
//import Popper from '@mui/material/Popper';
/* import serviceday from "../assets/Images/serviceday.jpg"
import { Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom'; */
import { NavLink } from 'react-router-dom'
import lifegroup from '../assets/Images/ServDay.jpg'
import online from '../assets/Images/online.jpg'


const Service = () => {
 /*  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined; */
  return (
    <div className="flex flex-col gap-8 md:mb-28">
    <h6 style={{fontFamily:"Lobster Two, sans-serif"}}  className="text-[#ff6347] text-center font-bold">Service Days</h6>
      <h3 className="w-full flex justify-center text-[#171730] -mt-7 font-semibold text-[32px]  leading-10 text-center">Location And Time</h3>
      <div className="flex justify-center flex-col px-2 md:px-0 md:flex-row items-center gap-7">
        <div className="flex flex-col relative  gap-2">
          <div className=" h-[200px] ">
          <img src={lifegroup} alt="image" className="h-[200px] md:object-cover rounded-md"/>
          </div>
        <div className="absolute text-white inset-0  bg-gray-700 opacity-35  h-[200px] rounded-md">
        </div>
        <div className="absolute  flex font-bold justify-center items-center w-full  h-[200px]">
        <h3 className="text-[#fff] text-[40px] ">IN-PERSON</h3>
        </div>
        <div className="flex  justify-center ">
            <NavLink to='/home/about'
              className="flex mt-4 rounded-sm justify-center  text-[14px] font-semibold   px-10 py-4 text-[#FEFEFE] bg-[#18181A]">
              Plan My Visit
            </NavLink>
        </div>    
        </div>
        <div className="flex flex-col  relative  gap-2">
          <div className=" h-[200px]  md:w-[350px]">
          <img src={online} alt="image" className="h-[200px] md:w-[350px] object-cover rounded-md"/>
          </div>
        <div className="absolute text-white inset-0  bg-gray-700 opacity-35  h-[200px] rounded-md">
        </div>
        <div className="absolute  flex font-bold justify-center items-center w-full  h-[200px]">
        <h3 className="text-[#fff] text-[40px] ">ONLINE</h3>
        </div>
        <div className="flex  justify-center ">
            <NavLink to='/home/about'
              className="flex mt-4 rounded-sm justify-center  text-[14px] font-semibold   px-10 py-4 text-[#FEFEFE] bg-[#18181A]">
              Watch online
            </NavLink>
        </div>
        </div>
        
        <div>
        </div>
      </div>

{/*             <h3 className="w-full flex justify-center text-[#222222] font-semibold text-[32px] leading-10">Service Days</h3>
 */}
           {/*  <div className=" flex justify-center">
                <div className="bg-[#3e3e3e] flex flex-col justify-center px-8">
                <h3 className="w-full my-5 flex justify-center font-bold  text-[20px] text-[#fff]">SUNDAY SERVICE</h3>
                 <div className="flex flex-col gap-6 mb-5">
                    <img src={serviceday} alt="dskf" width={'359px'} height={"276px"}/>
                    <button aria-describedby={id} type="button" onClick={handleClick} className="bg-white w-full h-[62px] text-[#121212] text-[16px] font-semibold">Join us for Service</button>
                   
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Paper>
                      <Typography>
                        <div className='md:w-[516px] text-center mx-4 md:mx-0 px-10 md:px:0 h-[355px] flex flex-col gap-5 justify-center items-center'>
                        <h3 className='font-medium text-[20px]'>How will you like to attend service?</h3>
                        <NavLink to ="" className="bg-[#18181A] text-[#FEFEFE] font-semibold text-[16px] h-[56px] w-[132px] flex justify-center items-center">Onsite</NavLink>
                        <NavLink to ="" className="bg-[#E2E2E2] text-[#222222] border-black border-[1px]  font-semibold text-[16px] h-[56px] w-[132px] flex justify-center items-center">Online</NavLink>
                        </div>
                      
                      </Typography>
                    </Paper>
                    </Popper>
                 </div>
                </div> 
            </div>
                */}

    </div>
  )
}

export default Service
