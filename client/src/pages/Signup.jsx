import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signupFormDetails, setSignupFormDetails] = useState({
    name: "",
    email: "",
    age: 0,
    phone: "",
    bloodGroup: "",
    password: "",
  });
  function handleChange(e) {
    setSignupFormDetails({
      ...signupFormDetails,
      [e.target.name]: e.target.value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post(
        "http://localhost:4000/auth/signup",
        signupFormDetails,
        {
          withCredentials: true,
        },
      );
      navigate("/login", { replace: true });
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-2xl font-bold">SignUp</h1>
      <form className="w-72 mt-4" onSubmit={handleSubmit}>
        <div className="flex justify-between mb-1">
          <label htmlFor="name">Name :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="text"
            id="name"
            name="name"
            value={signupFormDetails.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between mb-1">
          <label htmlFor="email">Email :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="email"
            id="email"
            name="email"
            value={signupFormDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between mb-1">
          <label htmlFor="age">Age :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="number"
            id="age"
            name="age"
            value={signupFormDetails.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between mb-1">
          <label htmlFor="phone">Phone :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="text"
            id="phone"
            name="phone"
            value={signupFormDetails.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex justify-between mb-1">
          <label htmlFor="bloodGroup">Blood Group :</label>
          <select
            className="border-1 p-0.5 rounded"
            name="bloodGroup"
            id="bloodGroup"
            value={signupFormDetails.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="" disabled hidden>
              BloodGroup
            </option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="AB+">AB+</option>
          </select>
        </div>
        <div className="flex justify-between mb-1">
          <label htmlFor="password">Password :</label>
          <input
            className="border-1 p-0.5 rounded"
            type="password"
            id="password"
            name="password"
            value={signupFormDetails.password}
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
