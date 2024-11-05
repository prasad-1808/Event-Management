import React, { useState } from "react";
import axios from "axios";
import "../../styles/Login.less";

function UserLogin() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("wedding_party");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        mobileNumber,
        password,
        role,
      });
      console.log("Login successful:", response.data);
      // Save the token and redirect as needed
    } catch (error) {
      console.error("Error logging in:", error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4"
        >
          <option value="wedding_party">Wedding Party</option>
          <option value="relatives">Relatives</option>
        </select>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default UserLogin;
