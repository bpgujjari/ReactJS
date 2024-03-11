import React, { useEffect, useState } from "react";
import axios from "axios";

const Ecart=()=>{
    const [data,setData]=useState([]);
    const [cartData,setCartData]=useState([]);
    const [cartCount,setCartCount]=useState(); 
  
   
    useEffect(()=>{
        handleClick();
    },[])

    

    const handleClick=()=>{

        const fetchData= async ()=>{
            let result=await axios.get(`https://fakestoreapi.com/products`);
            const {data}=result;
            console.log(data);
            setData(data);
        }
        fetchData();
    
    }
       
    return(
        <div>
            <button onClick={handleClick} >fetch</button>
            <aside>cart</aside>

        {
            data.map((eachproduct)=>{
                let {id,image,price,title}=eachproduct;
                return(
                <div key={id}>
                    <h3>{title}</h3>
                  <a href="comp1"><img src={image} alt="error" height={200} width={100}/></a>
                    <h4>$ : {price} /-</h4>
                    <button>add to cart</button>


                </div>
                )
                
            })
        }



        </div>
    )

}
export default Ecart;