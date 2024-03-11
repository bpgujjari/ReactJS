import { useState } from "react";

const UseStateAdv=()=>
{
   

    const [list,setList]=useState([]);
    const[message,setMessage]=useState({
        text:"",
        id:"",
    });

    const changeMessage=(e)=>{
        setMessage({...message,
            text:e.target.value})
    }
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        let obj={
            text:message.text,
            id:new Date().getTime().toString,
        }
        console.log(obj);
    }

    return(
        <>
        <form>
            <input type="text" name="message" id="message" placeholder="enter" value={message.text} onChange={changeMessage} onClick={handleSubmit} />
            <button type="submit"  >add</button>
        </form>
        <hr />

        <ul>
            {
                list.map((eachItem)=>{
                    const {text,id}=eachItem;
                    return <div>
                        <div key={id}>{text}</div>
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                })
            }
        </ul>
        </>
    )

}
export default UseStateAdv;