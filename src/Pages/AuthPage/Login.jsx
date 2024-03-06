/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = ({ onLogin }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (!username.trim().length && !password.trim().length)
      return toast.error("Please enter your username and password");
    setLoading(true);
    e.preventDefault();
    await onLogin(username, password);
    setLoading(false);
  };

  return (
    <div>
      <div className=" max-w-[1300px] container  bg-[#FAFAF9] mx-auto shadow-card overflow-x-hidden">
        <div className="flex items-center justify-center w-full px-2 align-middle ">
          <div className="outer"></div>
          <div className="flex justify-center items-center w-full h-[100vh] ">
            <div className="bg-white md:w-[400px] opacity-50 rounded-lg hover:opacity-90 w-[100%] px-4  md:px-[10px] py-[30px]">
              {" "}
              {/*  bg-white translate-y-[50%] md:translate-y-[15%] md:w-[436px] w-full    flex  flex-col px-4  md:px-[20px] py-[30px] */}
              <h3 className="text-[30px] flex justify-center w-full text-blue-500 font-bold">
                Login
              </h3>
              <form className="flex flex-col  gap-3 md:px-[30px] mt-4">
                <label>Username:</label>
                <input
                  type="text"
                  value={username}
                  placeholder="Enter your Username"
                  required
                  onChange={(e) => setusername(e.target.value)}
                  className="px-4 placeholder-blue-300 focus:outline-none py-[13px] rounded-lg border-[1.8px] border-blue-400"
                />
                <label>Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 focus:border-blue-500  focus:outline-none placeholder-blue-300 py-[13px] rounded-lg border-[1.8px] border-blue-400"
                />
                <div className="flex justify-between mt-2">
                  <div className="flex items-center gap-1">
                    <input type="checkbox" className="" />
                    <span className="text-[12px]">Remenber Me</span>
                  </div>
                  {/* <div>
                <span  className="text-[12px] text-blue-500 underline cursor-pointer">Forget password?</span>
               </div> */}
                </div>
                <div className="flex justify-center w-full">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-2 rounded-lg border-[1.8px] text-[#fff] text-[20px] hover:bg-blue-400 bg-blue-500 w-full py-3 flex justify-center font-normal"
                  >
                    {loading && <span>Authenticating...</span>}
                    {!loading && <span>Sign in</span>}
                  </button>
                </div>
                {/* <p className="flex w-full text-[14px]  justify-center  items-center">
                  Dont have an account?
                  <NavLink
                    to="/register"
                    className="text-[12px]  text-blue-500 ml-1 cursor-pointer underline"
                  >
                    Sign up?
                  </NavLink>
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
