import { useEffect, useRef, useState } from "react";

const UseRefEx1=()=>{

    const [data,setData] =useState();
    const count=useRef(1);

    useEffect(()=>{
        count.current=count.current+1;
        console.log(count.current);
       // setCount((prevCount)=>{setCount(prevCount+1)})
    })

    
    

    return(
        <>
        <input type="text" name="data" id="data" onChange={(e)=>{setData(e.target.value)}}/>
        <h2> Typing  {data}</h2>
        <h2>Component rendered : {count.current}</h2>

        </>
    )
}
export default UseRefEx1;