import { useState } from "react";

const ClickEvents2 =()=>
{

    const [res,setRes]=useState(" ");
    const func_one=(x,y)=>
    {
        x=='ranjith' && y=='ranjith'?setRes("login succes"):setRes("login failed...");
    }
    return(
        <>
            <button onDoubleClick={()=>func_one("ranjith","ranjith")}>doubleclick</button>
            <h1>{res}</h1>
        </>
    )
    
}
export default ClickEvents2;