import { useState } from "react";
const ClickEvents1=()=>
{

    const [res,setRes]=useState("  ");

    const login=(param1,param2)=>
    {
        param1=="ranjith" && param2=="ranjith" ? setRes("login success"):setRes("login failure");
    }
    return(
        <>
        <button onClick={()=>login("ranjith","ranjith")}>hit</button>
        <h1>{res}</h1>
        </>
    )

}
export default ClickEvents1;