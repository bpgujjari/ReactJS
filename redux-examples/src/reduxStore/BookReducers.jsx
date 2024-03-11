import { buy_book } from "./BookType";
const intialState={
    NumberOfBooks: 20
}
const BookReducers=(state=intialState,action)=>{

    switch(action.type){
        case buy_book: return{
            ...state,NumberOfBooks:state.NumberOfBooks-1
        }
        default : return state
    }


}
export default BookReducers;

