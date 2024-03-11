import { useState } from "react";
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
const ShowPassword=()=>{
    const[password,setPassword]=useState('');
    const[show,setShow]=useState(false)

    const handleClick=()=>{
        setShow(!show)
    }
return<>
<div>
<input type={show?'text':'password'} name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>  
<button onClick={handleClick}>{show?<AiFillEye/>:<AiFillEyeInvisible/> } </button>
</div>
</>
}
export default ShowPassword;