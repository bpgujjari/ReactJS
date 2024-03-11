import { useEffect, useState } from "react";

const UseEffectExGen=()=>{

    const [count,setCount]=useState(0)

    const increment=()=>{
     setCount(count+1) 
    }

    useEffect(()=>{
        console.log(count);
    },[count])



    return(
        <>
        <button onClick={increment}>click</button>
        <h1>{count}</h1>
        
        </>
    )
}
export default UseEffectExGen;