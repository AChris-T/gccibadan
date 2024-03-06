import gccclogo from "../assets/Images/gccc_logo2.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdEventAvailable } from "react-icons/md";
import SignUp from "../assets/Images/sign_out.png";
import { toast } from "react-toastify";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClearLocalStorage = () => {
    localStorage.removeItem("GCCC_ATTENDANCE");
    // Optionally, you can perform additional actions after clearing localStorage
    navigate("/login");
    toast.error("Have a nice day", {
      position: "top-right",
    });
  };
  return (
    <div className="flex flex-col  h-full  ">
      <div>
        <div className="flex justify-between h-20 items-center px-4">
          <img src={gccclogo} alt="gccclogo" />
        </div>
        <div className=" mt-14 gap-7 flex flex-col">
          <NavLink
            to="/dashboard/home"
            className=" px-8 flex text-center items-center gap-1 text-sm"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
              };
            }}
          >
            <FaUserCheck />
            Home
          </NavLink>
          <NavLink
            to="/dashboard/attendance"
            className=" px-8 flex text-center items-center gap-1 text-sm"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
              };
            }}
          >
            <BsCalendarDateFill />
            Attendance
          </NavLink>
          <NavLink
            to="/dashboard/events"
            className="px-8 flex text-center items-center gap-1 text-sm"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "blue" : "",
              };
            }}
          >
            <MdEventAvailable />
            Events
          </NavLink>
          <div className="px-8 flex text-center items-center gap-1 text-sm">
           
            <button
              onClick={handleClearLocalStorage}
              className="bg-red-500 flex gap-2 text-white px-3 py-2 rounded-lg"
            >
             <img src={SignUp} alt="signup" className="w-5" />  Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
