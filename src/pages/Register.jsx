import { useState } from "react";
import authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(username, password);
      setMessage(response.message);
      if(response.message==="User registered successfully"){
        navigate('/login',{replace:true})
      }
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <div className="form-container">
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      </div>
      
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
