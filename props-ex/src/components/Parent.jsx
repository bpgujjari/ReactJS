import Child from "./Child.jsx";
import { useState } from "react";
const Parent=()=>
{
   
    return(
        <>
        
        <Child key1={100}
                key2="ReactJS"
                key3={true}
                key4={[10,20,30,40,50]}
                key5={{sub1:`react`,sub2:`angular`}}
                key6={[{eid:111,ename:`emp1`,dept:`cse`,desg:`jr.developer`,esal:10000},
                {eid:222,ename:`emp2`,dept:`mech`,desg:`sr.developer`,esal:20000},
                {eid:333,ename:`emp3`,dept:`civil`,desg:`ceo`,esal:30000},
                {eid:444,ename:`emp1`,dept:`degree`,desg:`manager`,esal:40000},
                {eid:555,ename:`emp5`,dept:`cse`,desg:`testing`,esal:50000}]}
/>
        
        </>
    )


}
export default Parent;