import Comp2 from "./Comp2.jsx";
import { useState } from "react";

const Comp1 =()=>
{

const [str,setStr]=useState("ReactJs");
const [num,setNum]=useState(100);
const [obj,setObj]=useState({k1:"chimtu",k2:"ram",k3:"krishna"});
const [arr,arr1]=useState([10,20,30,40,50]);
const [emps,setEmps]=useState([{eid:111,ename:`emp1`,dept:`cse`,desg:`jr.developer`,esal:10000},
{eid:222,ename:`emp2`,dept:`mech`,desg:`sr.developer`,esal:20000},
{eid:333,ename:`emp3`,dept:`civil`,desg:`ceo`,esal:30000},
{eid:444,ename:`emp1`,dept:`degree`,desg:`manager`,esal:40000},
{eid:555,ename:`emp5`,dept:`cse`,desg:`testing`,esal:50000}]);

    return(
        <>
        <Comp2 str={str} num={num} obj={obj} arr={arr} emps={emps} >GujjariBhavnaiPrasad</Comp2>
        
        </>
    )

}
export default Comp1;