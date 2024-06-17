/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";
import { useState, useEffect } from "react";
import Login from "../src/Pages/AuthPage/Login";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Attendance from "./Pages/Attendance/Attendance";
import Dashboard from "./Pages/ChurchDashboard/Dashboard";
import Events from "./Pages/Events/Events";
import LandingPage from "./Pages/LandingPage/HomePage/Home"
import Home from "./Pages/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Pages/LandingPage/AboutPage/Aboutpage";
import HomeDetails from "./Pages/LandingPage/HomeDetails/HomeDetails";
import Stream from "./Pages/LandingPage/StreamPage.jsx/Stream";
import Give from "./Pages/LandingPage/GivePage/Give";
import Navbar from "./Modals/Navbar";
import HomeNavbar from "./Modals/HomeNavbar";
import Resources from "./Pages/Resources/Resources";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const getDataUrl = import.meta.env.VITE_APP_GET_DATA;

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("GCCC_ATTENDANCE");
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
      navigate("/");
    }
  }, []);
  const handleLogin = async (username, password) => {
    try {
      const response = await fetch(getDataUrl);
      const users = await response.json();
      const lowercaseUsername = username.toLowerCase();
console.log(response)
      const user = users.find(
        (user) =>
          (user.Email.toLowerCase() == lowercaseUsername &&
            user.Phone == password) ||
          (user.Phone == username && user.Phone == password)
      );

      if (user) {
        setLoggedInUser(user);
        localStorage.setItem("GCCC_ATTENDANCE", JSON.stringify(user));
        toast.success("Login successfull", {
          position: "top-right",
        });
        navigate("/");
      } else {
        toast.error("Invalid Username or password ", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-right",
      });
    }
  };
  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("GCCC_ATTENDANCE");
    navigate("/login");
  };

  const ProtectedRoute = ({ element, ...rest }) => {
    return loggedInUser ? element : <Navigate to="/login" />;
  };
  return (
    <>
        <Routes>
        <Route path="/" element={<LandingPage loggedInUser={loggedInUser} onLogout={handleLogout}/>}>
          <Route path ="/" element={<HomeDetails/>}/>
          <Route path ="/home/about" element={<About/>}/>
          <Route path ="/home/events" element={<Stream/>}/>
          <Route path ="/home/give" element={<Give/>}/>
          <Route path="/home/resources" element={<Resources/>}/>
        </Route>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute element={<Dashboard user={loggedInUser} />} />
          }
        >
          <Route path="/dashboard" index element={<Home />} />
          <Route path="/dashboard/home" index element={<Home />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="events" element={<Events />} />
        </Route>

        {/*   {/*     <Route path="/login">
        <Route index element={<Login onLogin={handleLogin}/>}/>
        <Route path='login' element={<Login/>}/>
{/*      <Route path='Register' element={<Register/>}/>
    </Route> */}
        <Route
          path="*"
          element={
            <>
              <div className="flex flex-col gap-6 items-center justify-center w-full h-[100vh]">
                <h1 className="text-2xl font-bold">
                  Error 404: Page Not Found.
                </h1>{" "}
                <button
                  className="px-6 py-4 text-lg text-white bg-purple-600 border rounded-lg"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>{" "}
              </div>
            </>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
