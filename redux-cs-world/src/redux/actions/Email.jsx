import { EMAILCHANGE } from "../ActionTypes";

const email_change=(email)=>{
    return{
        type : EMAILCHANGE,
        payload:email
    }
}
export default email_change;