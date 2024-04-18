import { Outlet } from "react-router-dom"
import HomeNavbar from "../../../Modals/HomeNavbar"

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto shadow-card ">
    <div className="flex flex-col">
    <HomeNavbar/>
    <Outlet/>
    </div>
    </div>
  )
}

export default Home
