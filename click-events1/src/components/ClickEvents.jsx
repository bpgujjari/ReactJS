import { useState } from "react";

const ClickEvents=()=>{
    const [str,setStr]=useState("");

    const func_one=()=>
    {
        setStr("welcome to react js");
    }

    return(
        <>
        <button onClick={func_one}>Click Here</button>        
        <h1>{str}</h1>
        </>
    )

}
export default ClickEvents;