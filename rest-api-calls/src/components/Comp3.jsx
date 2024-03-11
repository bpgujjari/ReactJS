import { useEffect,useState } from "react";
import axios from "axios";

const Comp3=()=>{
    const [arr,setArr]=useState([]);

    useEffect(()=>{
        const getCountris=async ()=>{
            
            let res =await axios.get(`https://restcountries.com/v3.1/all`);
                const {data}=res;
                console.log(data);
            
            
        }
        getCountris();
    },[])

    return(
        <>
        
       
        <table border={1}>
            <thead>
        <tr>
            <th>name</th>
            <th>captial</th>
            <th>flag</th>
        </tr></thead>
        <tbody>
        
        {
            arr.map((x,y)=>{
                return(
                    <tr>
                       <td>{x.name.common}</td>
                       <td>{x.flags.png}</td>

                    </tr>
                )
            })
        }
        </tbody>
        <tfoot></tfoot>



        </table>
        </>


    )
}
export default Comp3;
