import { useState } from "react";
const emps=[{eid:111,ename:`emp1`,dept:`cse`,desg:`jr.developer`,esal:10000},
    {eid:222,ename:`emp2`,dept:`mech`,desg:`sr.developer`,esal:20000},
    {eid:333,ename:`emp3`,dept:`civil`,desg:`ceo`,esal:30000},
    {eid:444,ename:`emp1`,dept:`degree`,desg:`manager`,esal:40000},
    {eid:555,ename:`emp5`,dept:`cse`,desg:`testing`,esal:50000}]
const StateEx=()=>
{

    return(
        <>
        <table border={1} cellPadding={10}cellSpacing={10} align="center">
            <tr>
                <th>eid</th>
                <th>ename</th>
                <th>dept</th>
                <th>desg</th>
                <th>esal</th>
            </tr>

            {
                emps.map((x,y)=>{
                    return(
                    <tr>

                        <td>{x.eid}</td>
                        <td>{x.ename}</td>
                        <td>{x.dept}</td>
                        <td>{x.desg}</td>
                        <td>{x.esal}</td>

                    </tr>
                    )
                })
            }


        </table>
        
        
        </>
    )


}
export default StateEx;