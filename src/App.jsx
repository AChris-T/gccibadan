/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './App.css'
import { useState, useEffect } from 'react';
import Login from "../src/Pages/AuthPage/Login"
//import Register from "../src/Pages/AuthPage/Register"
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Attendance from './Pages/Attendance/Attendance'
import Dashboard from './Pages/ChurchDashboard/Dashboard'
import Events from './Pages/Events/Events'
import Home from './Pages/Home/Home'
import user from "../src/Utils/Users.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users,setUsers] = useState(user)
  const [loggedInUser, setLoggedInUser] = useState(null)
 
  const navigate = useNavigate()

  useEffect(()=>{
    const storedUser = localStorage.getItem('GCCC_ATTENDANCE');
    if(storedUser){
      setLoggedInUser(JSON.parse(storedUser))
      navigate("/dashboard/home")
    }
  },[])

  const handleLogin = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if(user){
      setLoggedInUser(user);
      localStorage.setItem("GCCC_ATTENDANCE",JSON.stringify(user));
      toast.success('Login successfull',{
        position: "top-right",
    });
    navigate("/dashboard/home")
    }else{
      toast.error('Invalid Username or password ',{
        position: "top-right",
    });
    }
  }
  const ProtectedRoute = ({element , ...rest}) =>{
    return loggedInUser ? element :<Navigate to="/login"/>;
  }
  return (
    <>
    <Routes>
    <Route path="/login" element={<Login onLogin={handleLogin} />} />

      <Route path="/dashboard"
       element={<ProtectedRoute element={<Dashboard user={loggedInUser}/>}/>}>
      <Route path="/dashboard" index element={<Home />} />
      <Route path="/dashboard/home" index element={<Home />} />
        <Route path='attendance' element={<Attendance/>}/>
        <Route path='events' element={<Events/>}/>
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
                  onClick={() => navigate("/login")}
                >
                  Back to Home
                </button>{" "}
              </div>
            </>
          }
        />
    </Routes>
    <ToastContainer/>
    </>
  )
}

export default App
