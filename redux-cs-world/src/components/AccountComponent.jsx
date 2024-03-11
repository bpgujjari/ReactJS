import { useSelector } from "react-redux";

const AccountComponent=()=>{
    const data = useSelector(state=>state.bankReducer)
    return(
        <>
        
        <table border={1}>
            <thead>
            <tr>
                <th>Balance</th>
                <th>Name</th>
                <th>email</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                </tr>
            </tbody>
        </table>

        </>
    )
}
export default AccountComponent;