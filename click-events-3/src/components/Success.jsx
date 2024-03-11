import { useState } from "react";

const Success=()=>
{
    const [str,setStr]=useState("Success....");

    return(
        <>
        <h1>{str}</h1>
        </>
    )

}
export default Success;