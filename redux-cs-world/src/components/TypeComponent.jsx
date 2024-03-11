import { useSelector } from "react-redux";

const TypeComponent=()=>{

    const data=useSelector(state=>state.typeReducer)

    console.log(data);

    return(
        <>
        <table border={1}>
            <thead>
            <tr>
                <th>ID</th>
                <th>AMOUNT</th>
                <th>tYPE</th>
                <th>time</th>
            </tr>
            </thead>

            <tbody>
               
                    {
                        data.map((single,y)=>{
                            return <tr key={single.id}>
                            <td>{single.id}</td>
                            <td>{single.amount}</td>
                            <td>{single.bankType}</td>
                            <td>{single.time}</td>

                            </tr>
                        })
                    }
              
            </tbody>
           
        </table>
        </>
    )
}
export default TypeComponent;