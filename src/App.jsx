import './App.css'
import Login from "../src/Pages/AuthPage/Login"
import Register from "../src/Pages/AuthPage/Register"
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Attendance from './Pages/Attendance/Attendance'
import Dashboard from './Pages/ChurchDashboard/Dashboard'
import Events from './Pages/Events/Events'
import Home from './Pages/Home/Home'

function App() {
  const getEmail=localStorage.getItem("email")
  const getPassword=localStorage.getItem("password")
  const navigate = useNavigate()
  return (
    <div>

    <Routes>
    {getEmail && getPassword ? (
      <Route path="/dashboard" element={<Dashboard/>}>
      <Route path="/dashboard/home" index element={<Home />} />
        <Route path='attendance' element={<Attendance/>}/>
        <Route path='events' element={<Events/>}/>
      </Route>
    ):
    (
      <Route path="/">
        <Route index element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
      </Route>
    )}
    <Route
          path="*"
          element={
            <>
              <div className="flex flex-col gap-6 items-center justify-center w-full h-[100vh]">
                <h1 className="text-2xl font-bold">
                  Error 404: Page Not Found.
                </h1>{" "}
                <button
                  className="border bg-purple-600 py-4 px-6 rounded-lg text-white text-lg"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </button>{" "}
              </div>
            </>
          }
        />
    </Routes>
   
    </div>
  )
}

export default App
