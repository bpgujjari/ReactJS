import { useState } from "react";
const State=()=>{
const [x,setX]=useState([`react`,`angular`,`mongo`,`node`,`chimtu`]);
return(
    <>
    {
        <table border={1}>
            <tr>
                <th>index</th>
                <th>value</th>
            </tr>

            {
                x.map((a,b)=>{
                    return(
                        <tr key={b}>
                            <td>{b}</td>
                            <td>{a}</td>
                        </tr>
                    )
                })
            }


        </table>
    }
    
    </>
)


}
export default State;
