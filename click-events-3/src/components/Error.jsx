import { useState } from "react";

const Error=()=>
{
    const [str,setStr]=useState("Error....");

    return(
        <>
        <h1>{str}</h1>
        </>
    )

}
export default Error;