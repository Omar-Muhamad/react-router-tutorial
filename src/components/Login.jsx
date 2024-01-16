import { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path;

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="p-4">
      <label>
        Username:{" "}
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          className="border-2 mr-4"
        />
      </label>
      <button onClick={handleLogin} className="border-2 px-2 rounded-md">Login</button>
    </div>
  );
};
export default Login;
