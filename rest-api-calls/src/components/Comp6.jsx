import { useState,useEffect} from "react";

const Comp6=()=>
{   const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    const handler=e=>{
        setName(e.target.value)
    }
    const func_one=()=>
    {
        setCount(count+1)
        
    }

   
    return(
        <center>

            <input type="text" name="name" value={name} onChange={handler} />
            <button onClick={func_one}>clickher</button>
            <h1>{name}</h1>
            <h1>{count}</h1>

        </center>

    )


}
export default Comp6;

