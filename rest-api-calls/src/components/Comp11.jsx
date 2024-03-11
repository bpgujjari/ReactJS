import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {

  const [res,setRes]=useState("");


  const [formData, setFormData] = useState({
    id: '',
    name: '',
    salary:0});
   
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(`http://localhost:2323/saveUser`, formData)
      .then((response) => {
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return(
    <>
    <form onSubmit={handleSubmit}>
        <input type="number" name="id" value={formData.id}onChange={handleChange}/>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange}/>
        <button type="submit">Submit</button>
    </form>
    <h1>{res}</h1>
    </>
  );
};

export default RegistrationForm;
