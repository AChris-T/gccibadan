import { NavLink } from "react-router-dom"
import logo from "../assets/Images/logo.png"
const HomeNavbar = () => {
  return (
      <div className="flex max-w-[1440px] z-20 w-full fixed bg-white  h-24 justify-between gap-8  md:px-16 md:mr-16 items-center">
        <NavLink to="/">
        <img src={logo} alt="logo" width={'201px'} height={'56px'}/>
        </NavLink>
        <div className="md:flex hidden gap-6 text-lg font-normal text-[#7A797E]">
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
            <NavLink to="/home/streamService"
                style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Live Stream
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
            <NavLink to="home/resources"
              style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "black" : "",
              };
            }}
            >
            Resources
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
        </div>
        <div className="mr-5">
          <NavLink to='/login' className='bg-[#18181A] text-[#fefefe] px-9 py-4 rounded-sm text-base font-semibold '>Login</NavLink>
        </div>
    </div>
  )
}

export default HomeNavbar
