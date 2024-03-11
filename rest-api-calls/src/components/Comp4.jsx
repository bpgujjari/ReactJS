import { useState,useEffect} from "react";
import axios from "axios";

const Comp4=()=>
{

    const [arr,setArr]=useState([]);

    useEffect(()=>{
        func_one();
    },[]);
    const func_one=async ()=>{
        let result=await axios.get(`http://localhost:2323/getAll`);
       
        const {data}=result;
        setArr(data);
        

    }





    return(
        <>
        <table border={1}>

            <tr>
                <th>id</th>
                <th>name</th>
                <th>previousUnits</th>
                <th>current units</th>
                <th>monthly units</th>
                <th>per unit</th>
                <th>per above 300</th>
                <th>bill</th>
            </tr>

        {
            arr.map((x,y)=>{
                    return(

                        <tr>
                            <td>{x.userId}</td>
                            <td>{x.userName}</td>
                            <td>{x.previousUnits}</td>
                            <td>{x.currentUnits}</td>
                            <td>{x.monthlyUnits}</td>
                            <td>{x.perUnit}</td>
                            <td>{x.perUnitAbove300}</td>
                            <td>{x.bill}</td>
                        </tr>
                    )
            })
        }

        </table>

        </>
    )
   

}
export default Comp4;