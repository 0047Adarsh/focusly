import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Server error");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <div className="auth-left">
          <h1>Welcome Back 👋</h1>
          <p>Your tasks are waiting. Let’s get you signed in and focused.</p>
        </div>

        <div className="auth-card">
          <h2>Log In</h2>
          <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p>
            Don't have an account? <a href="/signup">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
