// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ Added Link here

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple validation (you can expand later)
    if (email === "admin@example.com" && password === "password") {
      // Save user info to localStorage (simulate auth)
      localStorage.setItem(
        "authUser",
        JSON.stringify({
          email,
          name: "Admin User",
          role: "admin",
        })
      );

      // Redirect to dashboard
      navigate("/admin");
    } else {
      setError("Invalid credentials. Try: admin@example.com / password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
        >
          Login
        </button>
      </form>
      <p className="mt-6 text-center">
        Don't have an account?{" "}
        <Link to="/signup" className="text-indigo-600 font-medium hover:text-indigo-800">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;