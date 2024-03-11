import React from "react";

let arr=[
    {

        title:"unknown",
        imgUrl:"https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABWB4gHLmQUo2T5j25yRHHczYvEQxo3R_bwtdHrBIgDdG1Q6XUONqTOVMQs3nnxS36Q8oD621dPCKZ3NkqXoVgYebIMC4P69jPdqnfCqXH-x6rXuQRLQp9RrfZlTDKmPXAnv5HQ.jpg?r=afe"
       },
       {
        title:"lincoln",
        imgUrl:"https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81303831/thumbnail/medium/fk7md93g9"
    },
    {
        title:"BrideBox",
        imgUrl:"https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYyVEvJoWloK3dLE-nwCmN52TH-lXYvjM6F9tcBpNkP--wGdG0AR-45d-sgLuIeNWXDHl7bJU9D57QGfSJ85FVzOURszBHyet4EMG7NaWdagLEh4TyrGINBkj7ZXO7rTNodjlA.jpg?r=902"
    }



]


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

const Comp8 =()=>
{
    return(
        < >

        
           {
            arr.map((x,y)=>{
                return(
                    <Movie key={y} title={x.title} imgUrl={x.imgUrl} />
                )
            })
           }
       
     
        </>
    )

}
export default Comp8;