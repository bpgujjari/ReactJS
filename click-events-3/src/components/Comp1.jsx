import { useState } from "react";
import Success from "./Success";
import Error from "./Error";

const Comp1=()=>
{
    const [flag,setFlag]=useState(true);


    const func_one=()=>
    {
        setFlag(flag=>!flag);
    }

    return(
        <>
        
        <button onClick={func_one}>ClickHere </button>

        {
            flag?(<Success></Success>):(<Error></Error>)
        }
        </>
    )

}
export default Comp1;