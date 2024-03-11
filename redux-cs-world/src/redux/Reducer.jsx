import { DEPOSIT, EMAILCHANGE, NAMECHANGE, WITHDRAW } from "./ActionTypes";

const initialState={
    balance:0,
    name:"",
    email:""
}
export const bankReducer=(state=initialState,action)=>{
    switch(action.type){
        case DEPOSIT :  return{...state,balance:state.balance+ +action.payload}
        case WITHDRAW: return {...state,balance:state.balance-action.payload}
        case NAMECHANGE : return {...state,name:action.payload}
        case EMAILCHANGE: return {...state,email:action.payload}
        default : return state
    }

}
const initialType=[];

export const typeReducer=(state=initialType,action)=>{
    switch(action.type){
        case "CREDIT" : return [...state,{id:action.payload.id,
            amount:action.payload.amount,
             bankType : action.payload.bankType, 
             time:action.payload.time.toString()}]
         case "DEBIT" : return [...state,{id:action.payload.id,
                amount:action.payload.amount,
                 bankType : action.payload.bankType, 
                 time:action.payload.time.toString()}]    
         default : return state
    }
}

