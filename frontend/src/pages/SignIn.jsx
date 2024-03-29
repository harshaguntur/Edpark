import axios from "axios";
import { useState } from "react";

const SignIn = () => {

    const [formData,setFormData] = useState({
      userPar : "",
      userPass : "",
    })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handelSubmit = ()=>{

      axios.post("/api/SignIn",formData);


    }
  

  return (

    <h1>hi</h1>

  )
}
export default SignIn