import { useNavigate } from "react-router-dom";
import Login from "../AuthPage/Login";

const Attendance = () => {
    const navigate= useNavigate()
    /* const removeEmail=localStorage.removeItem("email")
    const removePassword=localStorage.removeItem("password") */
    const handleClick=(e)=>{
        e.preventDefault()
        localStorage.removeItem("email",JSON.stringify(""));
        localStorage.removeItem("password",JSON.stringify(""));
        navigate("/login")

    }
  return (
    <div>

{/*     {removeEmail && removePassword ? <Login/> :
 */}    <div>
      welcome
      <button onClick={handleClick}>Clear</button>
    </div>
    
{/*     }
 */}    </div>
  )
}

export default Attendance
