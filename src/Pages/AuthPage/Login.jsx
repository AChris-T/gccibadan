import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Attendance from "../Attendance/Attendance";

const Login = () => {
 const navigate = useNavigate();
 const getEmail=localStorage.getItem("email")
 const getPassword=localStorage.getItem("password")

 const [inputValue, setInputValue] = useState({
  email:"",
  password:""
 })
 const [data, setData] = useState([]);
 console.log(inputValue)

 const getdata = (e) => {

  const { value, name } = e.target;

  setInputValue(() => {
    return {
        ...inputValue,
        [name]: value
    }
})

}

 const handleSubmit =(e)=>{
  e.preventDefault()
  const getUserDetails = localStorage.getItem("user");
  console.log(getUserDetails)

  const { email, password } = inputValue;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-right",
            });
        } else if (!email.includes("@")) {
            toast.error('please enter valid email address', {
                position: "top-right",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-right",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-right",
            });
        } else {

            if (getUserDetails && getUserDetails.length) {
                const userdata = JSON.parse(getUserDetails);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");
                    toast.success('Welcome', {
                      position: "top-right",
                  });
                    localStorage.setItem("email",JSON.stringify(userlogin))
                    localStorage.setItem("password",JSON.stringify(userlogin))
                    navigate("/attendance")
                }
            }
        }

    }
  return (
    <div>
      {getEmail && getPassword ? <Attendance/> :
      <div className=" max-w-[1300px] container  bg-[#FAFAF9] mx-auto shadow-card overflow-x-hidden">
      <div className="  flex justify-center items-center w-full">
        <div className="outer">
        <ToastContainer/>

        </div>
        <div className=" bg-white mt-[150px]  md:w-[436px] w-[300px] h-[500px] opacity-50 rounded-lg hover:opacity-90 flex flex-col md:px-[20px] py-[30px]">
          <h3 className="text-[30px] flex justify-center w-full text-blue-500 font-bold">Login</h3>
          <form className="flex flex-col  gap-3 px-[30px] mt-4">
              <label>Email/PhoneNumber:</label>
              <input type="email" name='email' onChange={getdata} className="px-4 placeholder-blue-300 py-[16px] rounded-lg border-[1.8px] border-blue-400" />
              <label>Password:</label>
              <input type="password" name='password' onChange={getdata} className="px-4 focus:border-blue-500 placeholder-gray-600 py-[16px] rounded-lg border-[1.8px] border-blue-400" />
              <div className="flex justify-between  mt-2">
               <div className="flex items-center gap-1">
                <input type="checkbox" className=""/>
                <span className="text-[12px]">Remenber Me</span>
               </div>
               <div>
                <span  className="text-[12px] text-blue-500 underline cursor-pointer">Forget password?</span>
               </div>
              </div>
              <div className="w-full flex justify-center">
              <button onClick={handleSubmit} className="mt-2 rounded-lg border-[1.8px] text-[#fff] text-[20px] hover:bg-blue-400 bg-blue-500 w-full py-3 flex justify-center font-normal">Sign in</button>
              </div>
              <p className="flex w-full text-[14px]  justify-center  items-center">Dont have an account?<NavLink to='/register' className="text-[12px]  text-blue-500 ml-1 cursor-pointer underline">Sign up?</NavLink></p>
          </form>
      </div>
      </div>
      </div>
    }
    </div>
  )
}

export default Login
