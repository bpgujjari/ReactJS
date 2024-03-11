import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Register=()=>{


    const [obj, setObj] = useState({
        userId: 0,
        userName: '',
        currentUnits:0,
        previousUnits:0});
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setObj((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post(`http://localhost:2323/save`, obj)
          .then((response) => {
            console.log('API Response:', response.data);
          })
          .catch((error) => {
            console.error('API Error:', error);
          });
      };


    return(<>
            <form>
                <input type="number" placeholder="enter id" value={obj.userId}  onChange={handleChange}/>
                <input type="text" placeholder="enter name" value={obj.userName} onChange={handleChange} />
                <input type="number" placeholder="enter previous" value={obj.previousUnits} onChange={handleChange} />
                <input type="=number" placeholder="enter current" value={obj.currentUnits} onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
            </form>
    </>)
}
export default Register;