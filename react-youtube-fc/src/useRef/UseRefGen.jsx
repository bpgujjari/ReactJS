import { useEffect, useRef, useState } from "react";

const UseRefGen=()=>{
    const [count,setCount]=useState(0);
    const count1=useRef(0);
    
    useEffect(()=>{
        console.log(count1.current);
    },[count1])


    return(<>
    
        <h1>{count}</h1>
        <br />
        <h1>{count1.current}</h1>
        <button onClick={(e)=>setCount(count+1)} >useState</button>
        <button onClick={()=>{count1.current=count1.current+1}}>useRef</button>
    </>)
}
export default UseRefGen;