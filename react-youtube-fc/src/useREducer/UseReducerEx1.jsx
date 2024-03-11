import React, { useReducer } from "react";

const reducer=(state,action)=>{
    console.log(state);
    console.log(action);

    if(action.type==='DELETE'){
        const newPersons=state.data.filter((eachPerson)=>{
            return eachPerson.id!=action.payload;
        })
        console.log(newPersons);
        return{data:newPersons}
    }
}
const UseReducerEx1=()=>{

    const initialState={
        data:[{'id':1,'name':'bhavnai','email':'bhavani12@gmail.com'},
        {'id':2,'name':'prasd','email':'prasadi12@gmail.com'}],
        length:2
    }

   console.log(useReducer(reducer,initialState));
    const[state,dispatch]= useReducer(reducer,initialState);


    const handleDelete=(id)=>{
        console.log(id);

dispatch({
    type:'DELETE',
    payload:id
    });

    }
    
   return(
    <>
    <h1>hello</h1>
    <h1>{state.data.length}</h1>

        <table>

            <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <td>delete</td>
                </tr>
                </thead>
                <tbody>

            {

                state.data.map((x)=>{
                    let {id,name,email}=x
                    return(
                        <tr key={x.id}>
                            <td>{x.name}</td>
                            <td>{x.email}</td>
                            <td><button onClick={()=>handleDelete(id)}>delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
            
        </table>

    </>
   )


}
export default UseReducerEx1;