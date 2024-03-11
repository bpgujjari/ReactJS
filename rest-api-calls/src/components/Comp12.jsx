import axios from "axios";
import { useEffect, useState } from "react";

const Comp12=()=>{
const URL=`http://localhost:2323/getAll`;
const [drinksData,setDrinksData]=useState([])

const fetchData=async ()=>{
    const response=await axios.get(URL);
    console.log(response.data);
    setDrinksData(response.data)
}





return(<>
<button onClick={fetchData} >hello</button>
    
{

drinksData.map((obj)=>{
    console.log(obj);
        return <div key={obj.id} >

            <ul>
                <li>{obj.name}</li>
              <img src={obj.img} alt="hi" />
                

            </ul>

        </div>
    })
}

</>)




}
export default Comp12;