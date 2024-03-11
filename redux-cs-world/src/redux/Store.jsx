import { combineReducers, createStore } from "redux"
import { typeReducer,bankReducer } from "../../../redux-cs-world/src/redux/Reducer"
const centralReducer={typeReducer: typeReducer,bankReducer:bankReducer}


const mainStore= combineReducers(centralReducer)
const store= createStore(mainStore)
export default store;
