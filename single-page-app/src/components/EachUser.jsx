import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
const EachUser=()=>{
    const [eachUser,setEachUser]=useState({})
    const {userId}=useParams();

   useEffect(()=>{
    const fetchById= async ()=>{
        //  http://localhost:2323/getOne/
        let res=await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)

        setEachUser(res.data);
        console.log(res.data);
    }
    fetchById();

   },[]) 

    return (
        <>
        <ul className="card">

            <li>{eachUser.name}</li>
            <li>{eachUser.email}</li>
        </ul>
        </>
    )
}
export default EachUser;