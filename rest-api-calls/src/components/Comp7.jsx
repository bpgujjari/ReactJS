import React from "react";


let unknownObj={

 title:"unknown",
 imgUrl:"https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWB4gHLmQUo2T5j25yRHHczYvEQxo3R_bwtdHrBIgDdG1Q6XUONqTOVMQs3nnxS36Q8oD621dPCKZ3NkqXoVgYebIMC4P69jPdqnfCqXH-x6rXuQRLQp9RrfZlTDKmPXAnv5HQ.jpg?r=afe"
}

let lincolnObj={
    title:"lincoln",
    imgUrl:"https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81303831/thumbnail/medium/fk7md93g9"
}
const Movie=(props)=>
{
    return(
        <>
        <h2>{props.firstName}</h2>
        <h2>{props.title || "Random Title"}</h2>
        <img src={props.imgUrl} alt="hello" />
        </>
    )
}

const Comp7 =()=>
{
    return(
        < >
         <Movie  title={unknownObj.title} imgUrl={unknownObj.imgUrl}/>    
         <Movie title={lincolnObj.title}  imgUrl={lincolnObj.imgUrl}/>         
     
        </>
    )

}
export default Comp7;