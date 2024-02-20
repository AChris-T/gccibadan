import gccclogo from "../assets/Images/gccc_logo2.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { FaUserCheck } from "react-icons/fa";
import SignUp from "../assets/Images/sign_out.png"
import { toast } from "react-toastify";

const Sidebar = () => {
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
    <div className='flex flex-col  h-full  '>
    <div>
      <div className='flex justify-between h-20 items-center px-4'>
      <img src={gccclogo} alt='gccclogo'/>
      </div>
      <div className=' mt-14 gap-7 flex flex-col'>
      <NavLink to="/dashboard/home" className=" px-8 flex text-center items-center gap-1 text-sm"
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
        <NavLink to="/dashboard/attendance" className=" px-8 flex text-center items-center gap-1 text-sm"
           style={({ isActive,}) => {
            return {
            fontWeight: isActive ? "bold" : "",
            color: isActive? "blue":"", 
            };
            }}
          > 
       
          <FaUserCheck/>
            Attendance
        </NavLink>
        <NavLink to="/dashboard/events" className="px-8 flex text-center items-center gap-1 text-sm"
          style={({ isActive,}) => {
            return {
            fontWeight: isActive ? "bold" : "",
            color: isActive? "blue":"", 
            };
            }}
        > 
          <FaUserCheck/>
            Events
        </NavLink>
      </div>
      
    </div>
    <div className=" h-full flex flex-col items-center justify-center mt-[100px] ">
            <img src={SignUp} alt="signup" className="w-20 ml-6 mb-4"/>
        <button onClick={handleClearLocalStorage} className="bg-blue-600 text-white px-7 py-2 rounded-lg">Sign Out</button>
      
    </div>
      
    </div>
  )
}

export default Sidebar
