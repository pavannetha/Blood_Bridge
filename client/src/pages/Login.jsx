import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginFormDetails, setLoginFormDetails] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    setLoginFormDetails({
      ...loginFormDetails,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await axios.post(
      "http://localhost:4000/auth/login",
      loginFormDetails,
      {
        withCredentials: true,
      },
    );
    navigate("/");
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="w-72 mt-4" onSubmit={handleSubmit}>
        <div className="flex justify-between mb-1">
          <label htmlFor="email">Email :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="email"
            id="email"
            name="email"
            value={loginFormDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between mb-1">
          <label htmlFor="password">Password :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="password"
            id="password"
            name="password"
            value={loginFormDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="p-0.5 border-1 rounded"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
