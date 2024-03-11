const Child =(props)=>
{
    return(
        <>
        <h1>{props.key1}</h1>
        <h1>{props.key2}</h1>
        <h1>{JSON.stringify(props.key3)}</h1>
        <h1>{JSON.stringify(props.key3)?props.key1:props.key2}</h1>
       
        <h1>{
 props.key4.map((x,y)=>{
        return(
            <h2>{x}</h2>
        )
    })
}
</h1>
    <h1>{props.key5.sub1}....{props.key5.sub2}</h1>

    <table border={1}>

        
            <tr>
                <th>eid</th>
                <th>ename</th>
                <th>esal</th>
                <th>edept</th>
                <th>desg</th>
            </tr>

           {props.key6.map((a,b)=>{
                return(
            <tr key={b}>

                <td>{a.eid}</td>
                <td>{a.ename}</td>
                <td>{a.esal}</td>
                <td>{a.dept}</td>
                <td>{a.desg}</td>
            </tr>
                )
           }

           )}

        
    </table>

        </>
    )
}
export default Child;