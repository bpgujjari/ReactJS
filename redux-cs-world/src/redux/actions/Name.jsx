import { NAMECHANGE } from "../ActionTypes";

const name_change=(nam)=>{
    return{
        type:NAMECHANGE,
        payload:nam
    }
}
export default name_change;