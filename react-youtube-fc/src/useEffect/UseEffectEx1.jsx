import { useEffect, useState } from "react";

const UseEffectEx1=()=>{

    const URL=`https://jsonplaceholder.typicode.com/users`;
    
    const [userData,setUserData]=useState([]);
    

    const fetchUsersData=async (apiURL)=>{
       
            const response=await fetch(apiURL);
            const data=await response.json();
            setUserData(data);
            console.log(userData);
    }  
    useEffect(()=>{
        fetchUsersData(URL);
    },[])

   


    return(
        <>
        
        </>
    )

}
export default UseEffectEx1;
