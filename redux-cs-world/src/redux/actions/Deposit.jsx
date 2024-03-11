import { DEPOSIT } from "../ActionTypes";

const deposit_amt=(amt)=>{
    return{
        type:DEPOSIT,
        payload:amt
    }
}
export default deposit_amt;


