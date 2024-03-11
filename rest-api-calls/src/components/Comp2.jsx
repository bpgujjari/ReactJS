import { useState, useEffect } from "react";

import axios from "axios";

const Comp2=()=>
{

    const [emps,setEmps]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:2323/allUsers`).then((posRes)=>{
            const {data}=posRes;
            setEmps(data);
        },(errRes)=>{
            console.log(errRes);
        })
    },[])


    return(
        <>
        <table border={1}>
        <tr>
            <th>id</th>
            <th>name</th>
            <th>salary</th>
            <th>img</th>

        </tr>

        {
            emps.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{element.e_id}</td>
                        <td>{element.e_name}</td>
                        <td>{element.e_sal}</td>
                        <td><img src={element.img} alt="" /></td>
                    </tr>
                )
            })
        }

        </table>
        </>
    )

}
export default Comp2;