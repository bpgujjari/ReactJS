import {createStore} from "redux"
import BookReducers from "./BookReducers"
const store=createStore(BookReducers);
export default store;
