import { useEffect, useState } from "react";
const UseEffectEx2=()=>{
    const URL=`https://https://fakestoreapi.com/products`;
    const [drinksData,setDrinksData]=useState([])
    const [term,setTerm]=useState(``);
    const fetchData=async (apiUrl)=>{
        const response=await fetch(apiUrl);
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
                    const {idDrink,strDrink,strDrinkThumb}=eachDrink;
                    return <li key={idDrink}>

                            <div>
                                <img src={strDrinkThumb} alt="hi" />
            
                            </div>
                            <div>{strDrink}</div>
                            
                    </li>
                })
            }

        </ul>

        </>
    )

}
export default UseEffectEx2;