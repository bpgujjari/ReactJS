import { useState } from "react";
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'

const Icons=()=>{

// This is the compenet is building to demonstrate if click on the eye icon password must be hidden 

// mostly for hiding and how to use the buttons in react applaction.


const [password,setPassword]=useState('')
const[isVisible,setIsVisible]=useState(true)
return(<>
<input type={isVisible?'text':'password'} value={password} onChange={(e)=>{setPassword(e.target.value)}} />
<button onClick={()=>{setIsVisible(!isVisible)}} >{isVisible?<AiFillEye/>:<AiFillEyeInvisible/>}</button>
</>)


}
export default Icons;