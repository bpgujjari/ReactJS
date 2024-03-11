import { useDispatch, useSelector } from "react-redux";
import purchase_book from "../reduxStore/BookActions";
const Comp1 =()=>{
const state= useSelector(state=>state.NumberOfBooks)
const dispatch= useDispatch()
    return(
        <>
        <h1>Hello</h1>
        <h2>number of Books ..{state}</h2>
        
        <button onClick={()=>{dispatch(purchase_book())}} >Buy</button>
        </>
    )
}
export default Comp1;
