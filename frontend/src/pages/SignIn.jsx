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
    <>
      <h1>Sign In</h1>
      <h4>Email/Username</h4>
      <input type="text" placeholder="Enter email/password" />
      <h4>Password</h4>
      <input type="password"/>
    </>
  );
}
export default SignIn