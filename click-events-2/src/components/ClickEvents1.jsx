import { useState } from "react";

const ClickEvents1=()=>
{
    const [count,setCount]=useState(0);

    const increment=()=>
    {
        setCount(count=>count+1);
    }
    const decrement =()=>
    {
        setCount(count=>count-1);
    }


    return(
        <>
        
        <button onClick={increment}>INCREMENT</button> <br /><br /><br />
        <button onClick={decrement}>DECREMENT</button> 
        <h1>{count}</h1>
        </>
    )
}
export default ClickEvents1;