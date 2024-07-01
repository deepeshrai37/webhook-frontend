import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(username, password);
      login(response.token);
      navigate("/dashboard");
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="form-container">
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      </div>
     
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
