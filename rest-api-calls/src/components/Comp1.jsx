import { useState,useEffect} from "react";
import axios from "axios";
const Comp1=()=>
{
    const [arr,setArr]=useState([]);
    
    useEffect(()=>{
        const fetchUsers=async()=>
        {
        
            let res= await axios.get(`https://restcountries.com/v3.1/all`);
            const {data}=res;
            setArr(data);
        }
        fetchUsers();
    },[])

    return(
        <>
        <table border={1}>
            <thead>

                <tr>

                <th>name</th>
             </tr>
            </thead>

            <tbody>
            {
           arr.map((element,index)=>{
            <tr>

                <td>{element.name.common}</td>
                

            </tr>

           })
        }
            </tbody>


        </table>
        </>
    )


}
export default Comp1;