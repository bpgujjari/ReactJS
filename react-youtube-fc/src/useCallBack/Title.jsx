import React from "react";
const Title=()=>{
    console.log("Title component rendered...");
    return(
        <>
            <h1>UseCallBack and React.memo</h1>
        </>
    )
}
export default React.memo(Title);