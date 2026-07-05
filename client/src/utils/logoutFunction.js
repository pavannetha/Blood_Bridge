import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextData } from "../components/ContextAPI";

async function logoutFunction() {
  console.log("clicked logout button");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(contextData);
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

export default logoutFunction;
