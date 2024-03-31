import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userPass: "",
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/SignIn", { formData });

      //deconstructing parms from axios
      const { userName, userPass } = response.data;

      if (userName === "true" && userPass === "true") {
        // Successful login
        console.log("User logged in successfully");
        navigate("/studentdashboard");
      } else if (userName === "true" && userPass === "false") {
        // Incorrect password
        setErrorMessage("Incorrect password");
      } else {
        // User not found
        setErrorMessage("User not found");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <>
      <form onSubmit={handelSubmit}>
        <h1>Sign In</h1>
        <h4>Email/Username</h4>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Enter email/password"
          required
        />
        <h4>Password</h4>
        <input
          type="password"
          name="userPass"
          value={formData.userPass}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      </form>
    </>
  );
};

export default SignIn;
