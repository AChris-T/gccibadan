import './App.css'
import Login from "../src/Pages/AuthPage/Login"
import Register from "../src/Pages/AuthPage/Register"
import { Route, Routes } from 'react-router-dom'
import Attendance from './Pages/Attendance/Attendance'

function App() {

  return (
    <div>
    <Routes>
      <Route path="/">
        <Route index element=<Login/>/>
        <Route path='login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
      </Route>
      <Route path="/">
        <Route path='/attendance' element={<Attendance/>}/>
      </Route>
    </Routes>
   
    </div>
  )
}

export default App
