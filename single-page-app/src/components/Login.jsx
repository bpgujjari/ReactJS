import { useRef, useState } from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

const Login=()=>{

    const {login}=useAuth();
    const [user,setUser]=useState()
    const navigate=useNavigate();
    



    return(<>
            <h2>Login here</h2>
        username <input type="text" name="user" id="user"  onChange={(e)=>{setUser(e.target.value)}}/>

        
        <button onClick={()=> {login(user),navigate("/",{replace:true})}}>Login</button>
    </>)
}
export default Login;

