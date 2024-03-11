import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const Users=()=>{
     const [data,setData]=useState([])
    useEffect(()=>{
        //  http://localhost:2323/getAll
        const fetchData=async ()=>{
            let res=await axios.get('https://jsonplaceholder.typicode.com/users')
            setData(res.data)
        }
        fetchData();
    },[])


    return(<>
        <h1>Users</h1>
        <div className="card-container">

            {
                data.map((eachUser)=>{
                    return <Link key={eachUser.id} to={`/users/${eachUser.id}`}>

                            <ul className="card">
                                <li>{eachUser.name}</li>
                                <li>{eachUser.email}</li>
                            </ul>
                        
                         </Link>
                })
            }
            </div>

    </>)
}
export default Users;