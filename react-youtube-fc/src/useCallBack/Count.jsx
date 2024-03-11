import React from "react";
const Count=({text,number})=>{

    console.log(`${text}  rendered`);

    return <h1> ${text} ... {number}</h1>



}
export default React.memo(Count);