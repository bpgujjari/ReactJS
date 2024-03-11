import { WITHDRAW } from "../ActionTypes";

const withdraw_amt=(amt)=>{
    return{
        type:WITHDRAW,
        payload:amt
    }
}
export default withdraw_amt;