import { useEffect, useMemo, useState } from "react";
const slowFunc=(number)=>{

    for (let index = 0; index < 2000000000; index++) {
        
    }
    console.log('slow func running');

    return number*2;
}

const UseMemoEx=()=>{
    
    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    const doubleNumber= useMemo(()=>{ slowFunc(number);
    },[number])

    useEffect(()=>{
        console.log('theme changed...');
    })

    const themeChange={ backgroundColor : dark ? "white":"black",
    color :  dark ? "black":"white",
        
    }

    


    return(
        <>
        
            <input type="number" name="number" value={number} onChange={(e)=>{(setNumber(Number(e.target.value)))}} />
            <button onClick={()=>{setDark(!dark)}}>change theme</button>
            <h2 style={{themeChange}}> count is..{doubleNumber}</h2>



        </>
    )
}
export default UseMemoEx;