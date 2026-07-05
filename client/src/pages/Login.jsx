import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextData } from "../components/ContextAPI";

export default function Login() {
  const { setIsAuthenticated } = useContext(contextData);
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
    // console.log(data, " data in login page");
    setIsAuthenticated(true);
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
      <Link to="/signup">Signup</Link>
    </div>
  );
}
