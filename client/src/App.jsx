import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProtectedLayout from "./ProtectedLayouts/AuthProtectedLayout";
import ContentProtectedLayout from "./ProtectedLayouts/ContentProtectedLayout";
import FallBackComponent from "./components/FallBackComponent";
import Dashboard from "./pages/Dashboard";
import RaiseRequest from "./pages/RaiseRequest";
import History from "./pages/History";
import Profile from "./pages/Profile";
import axios from "axios";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    async function authCheck() {
      try {
        const data = await axios.get("http://localhost:4000/auth/checkAuth", {
          withCredentials: true,
        });
        if (data.data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    authCheck();
  }, []);
  console.log(isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={<AuthProtectedLayout isAuthenticated={isAuthenticated} />}
          >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route
            element={
              <ContentProtectedLayout isAuthenticated={isAuthenticated} />
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/raiseRequest" element={<RaiseRequest />} />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<FallBackComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
