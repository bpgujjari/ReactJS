import axios from "axios";
import { useEffect, useState } from "react";
const Comp13Electricity=()=>{
    const URL=`http://localhost:2323/search`;
    const [drinksData,setDrinksData]=useState([])
    const [term,setTerm]=useState(``);
    const fetchData=async (apiUrl)=>{
        const response=await axios.get(apiUrl);
        const {drinks}=await response.json();
        console.log(drinks);
        setDrinksData(drinks)
    }
    const hello=(e)=>{
        setTerm(e.target.value);
    }

    useEffect(()=>{
        const urlpro=`${URL}${term}`
        fetchData(urlpro);
    },[term])


    return(
        <>
        <form>
        <input type="text" value={term} onChange={hello} />
        </form>
        <hr />

        <ul className="coctail-data">
            {
                drinksData.map((eachDrink)=>{
                    const {userId,userName,currentUnits,monthlyUnits,bill}=eachDrink;
                    return <li key={userId}>

                          <h6>{userName}  {currentUnits} {monthlyUnits} {bill}</h6>
                          <hr />
                            <div>{strDrink}</div>
                            
                    </li>
                })
            }

        </ul>

        </>
    )

}
export default Comp13Electricity;