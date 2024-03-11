import { useRef } from "react";

const UseRefEx2=()=>{


    const inputDom=useRef();
    const inputDom2=useRef();

    const focusFunc=()=>{
        inputDom2.current.focus();
        inputDom.current.focus();
    }

    return(
        <>
        
        <input type="text" ref={inputDom} />
        <input type="text" ref={inputDom2} />
        <button onClick={focusFunc}>focus</button>
        <h1>{inputDom.current}</h1>
        
        </>
    )
}
export default UseRefEx2;