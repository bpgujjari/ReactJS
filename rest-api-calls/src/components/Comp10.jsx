import React, {useState,useRef}from "react";
import axios from "axios";
const Comp10=()=>{

    const id=useRef(null);
    const name=useRef(null);
    const salary =useRef(null);
    
    const func_one=()=>{
        const my_func=async ()=>{
            
            let res=await axios.post('http://localhost:2323/saveUser',{"id":id.current.value,"name":name.current.value,"salary":salary.current.value})
            const {data}=res;
            console.log(data);
            
        }
        my_func();
    }


return(
    <>
    
    <form onSubmit={func_one}>

        <input type="number" ref={id} /><br /><br />
        <input type="text" ref={name} /><br /><br />
        <input type="number" ref={salary} /><br /><br />
        <button> Sumit </button>
    </form>   
    </>
    )

}
export default Comp10;