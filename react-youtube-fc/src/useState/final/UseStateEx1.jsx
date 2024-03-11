import React, {useState} from "react";
const UseStateEx1=()=>
{
    const [num,setNum]=useState(0);

    const minus=()=>
    {
        setNum((ct)=>ct-1);
        setNum((ct)=>ct-1);

    }

    const plus=()=>{
        setNum((ct)=>ct+1);
        setNum((ct)=>ct+1);

    }
    return(
        <>
        <h1>HEllo chicha</h1>

        <button onClick={minus}>-</button>
        <h1>{num}</h1>
        <button onClick={plus}>+</button>

        </>
    )

}
export default UseStateEx1;