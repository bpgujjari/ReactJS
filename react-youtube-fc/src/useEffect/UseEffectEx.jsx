import { useEffect, useState } from "react";

const UseEffectEx=()=>{

    const URL=`https://jsonplaceholder.typicode.com/users`;
    
    const [userData,setUserData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [isError,setIsError]=useState({error:false,msg:""});

    const fetchUsersData=async (apiURL)=>{
        setLoading(true);
        setIsError({error:false,msg:""})
        try {
            console.log("hello");
            const response=await fetch(apiURL);
            const data=await response.json();
            setUserData(data);
            setLoading(false);
            setIsError({error:false,msg:""})

            if (response.status==404) {
                throw new Error("data not found");
            }       
        } catch (error) {
            setLoading(false);
            setIsError({error:true,msg:error.message || "something went wrong"})
        } 
    }
    useEffect(()=>{
        fetchUsersData(URL);
    },[])

    if(loading)
    {
        return <div>
            <h3>loading...</h3>
        </div>
    }
    if(isError.error)
    {
        return <div><h3>{isError.msg}</h3></div>
    }


    return(
        <>
        <ul>
            {
                userData.map((x)=>{
                    const {id,name,username}=x;
                    return <li key={id}><div>{name}</div>
                                        <div>{username}</div>
                                        <div>{x.email}</div></li>
                })
            }
        </ul>
        </>
    )
}
export default UseEffectEx;
