import React, { useContext } from "react";
import { navitems } from "../utils/navItems.js";
import { Link, useNavigate } from "react-router-dom";
import { contextData } from "../components/ContextAPI.jsx";
import axios from "axios";

export default function Sidebar() {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(contextData);
  async function logoutFunction() {
    console.log("clicked logout button");
    try {
      const data = await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        {
          withCredentials: true,
        },
      );
      setIsAuthenticated(false);
      navigate("/login");
    } catch (err) {
      console.log(err.message, " err in logout");
    }
  }
  return (
    <div className="flex flex-col justify-between h-screen border p-3 w-[15%]">
      <div className="flex flex-col gap-14">
        <div>
          <h1 className="text-3xl font-extrabold">Blood Bridge</h1>
        </div>
        <ol className="flex flex-col gap-3">
          {navitems.map((item) => {
            return (
              <li key={item.name}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="text-2xl font-bold" onClick={logoutFunction}>
        Logout
      </div>
    </div>
  );
}
