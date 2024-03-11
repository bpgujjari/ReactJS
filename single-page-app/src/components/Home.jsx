import {useNavigate} from "react-router-dom"
const Home=()=>{

    const navigate=useNavigate();
    return(<>
    <h1>Home</h1>
    <button onClick={()=>{navigate("/success")}}>Success</button>

    </>)
}
export default Home;