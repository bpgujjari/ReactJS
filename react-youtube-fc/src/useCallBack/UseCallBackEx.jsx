import { useState,useCallback } from "react";
import Count from "./Count";
import Title from "./Title";
import Button from "./Button";
const UseCallBackEx=()=>{
    const [age,setAge]=useState(0);
    const [sal,setASal]=useState(10000);

    const ageChanger= useCallback( ()=>{
        setAge(age+1);
    },[age])
    const salChanger=useCallback(()=>{
        setASal(sal+5000);
    },[])


    return(<>

        <Title> </Title>

        <Count text={"age"} number={age}/>
        <Count text={"salary"} number={sal}/>

        <Button clickHandler={ageChanger} >AgeButton</Button>

        <Button clickHandler={salChanger}>SalaryButton</Button>


    
    </>)
}
export default UseCallBackEx;
