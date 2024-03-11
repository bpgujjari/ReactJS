import {useState} from "react";

const First=()=>
{

const [x,setX]=useState(`ReactJS`);
const [y,z]=useState(100);
const [a,b]=useState(true);
const [arr1,setArr1]=useState([`node`,`react`,`angular`,`vue`,`mongo`]);

{
    return(
      <>
      <h1>{x}</h1>
      <h1>{y}</h1>

       {
        
        arr1.map((m,n)=>{
            return(
            <h1 key={n}>{m}</h1>
            )

        })
       }

        
  

      </>
    )
}
}
export default First;
