const Comp4 =(props)=>
{
    return(
        <>
        <h1>{props.str}</h1>
        <h1>{props.num}</h1>
        <h1>{props.obj.k1}</h1>
        <h1>{props.obj.k2}</h1>
        <h1>{props.children}</h1>
        {
            props.arr.map((x,y)=>{
                return(
                    <h1 key={y}>{x}</h1>
                )
            })
        }

        


<table border={1}>

        
<tr>
    <th>eid</th>
    <th>ename</th>
    <th>esal</th>
    <th>edept</th>
    <th>desg</th>
</tr>

{props.emps.map((a,b)=>{
    return(
<tr>

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
export default Comp4;