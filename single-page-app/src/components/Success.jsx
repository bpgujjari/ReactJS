import {useNavigate} from "react-router-dom"
const Success=()=>{
    const navigate=useNavigate();

    return(<>
    <h1>success</h1>
            <button onClick={()=>{navigate("/")}}>BackToHome</button>
    </>)

}
export default Success;