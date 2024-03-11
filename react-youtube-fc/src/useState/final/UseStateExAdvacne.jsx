import { useState } from "react"

const UseStateExADvace=()=>{
   

    const arr=[{
        id:1,
        firstName:`Bhavani`,
        lastName:`Prasad`,
        age:21
    },
    {
        id:2,
        firstName:`Ram`,
        lastName:`Krishna`,
        age:22
    }];


// const firstNameChange=()=>{
//     setData({...data,firstName:`king`})
// }

// const changeLastName=()=>{
//     setData({...data,lastName:`NO1`})
// }
// const chnageAge=()=>
// {
//     setData({...data,age:22})
// }

    const[data,setData]=useState(arr);

    return(
       <>
       <table>
        <thead><tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastname</th>
            <th>age</th>
            </tr></thead>
        {
            data.map((x,y)=>{
                <tr key={y}>
                    <td>{y.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.age}</td>
                </tr>

            })
        }

       </table>


      
       </> 
    )

}
export default UseStateExADvace;
