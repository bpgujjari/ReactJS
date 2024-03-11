import React from "react";
const Button=({children,clickHandler})=>{
    console.log(`${children} : clicked`);

        return(
            <>
                <button onClick={clickHandler}>{children}</button>
            </>
        )
}
export default React.memo(Button);