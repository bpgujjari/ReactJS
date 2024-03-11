import { useState } from "react";
import{ useDispatch }from "react-redux"
import deposit_amt from "../redux/actions/Deposit";
import withdraw_amt from "../redux/actions/Withdraw";
import name_change from "../redux/actions/Name";
import email_change from "../redux/actions/Email";

const FormComponent=()=>{
    const [amt,setAmt]=useState("")
    const [name,setName]=useState("")
    const [mail,setEmail]=useState("")
    const [id,setId]=useState(1);
    const dispatch=useDispatch();
return(<>

AMount <input type="number" value={amt} onChange={(e)=>{setAmt(e.target.value)}} />
<button onClick={()=>{dispatch(deposit_amt(amt),setAmt("")),
dispatch(({type:"CREDIT",payload:{
    id:id,amount:amt,bankType:"credit",time:new Date()}})
    ,setId(id+1))}}>Deposit</button>
<button onClick={()=>{dispatch({type:"DEBIT",payload:{id:id,type:"debit",amount:amt,time:new Date(),bankType:"debit"}}), dispatch(withdraw_amt(amt),setAmt(""),setId(id+1))}} >Withdraw</button><br /> 

Name <input type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}/> 
<button onClick={()=>{dispatch(name_change(name),setName(""))}} >update</button><br />

Email <input type="email" value={mail} onChange={(e)=>{setEmail(e.target.value)}} />
<button onClick={()=>{dispatch(email_change(mail),setEmail(""))}} >update</button>




</>)
}
export default FormComponent;