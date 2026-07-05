import React, { useContext, useEffect, useState } from "react";
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
import { contextData } from "./components/ContextAPI";

export default function App() {
  const { setIsAuthenticated, setLoading } = useContext(contextData);

  useEffect(() => {
    async function authCheck() {
      try {
        const res = await axios.get("http://localhost:4000/auth/checkAuth", {
          withCredentials: true,
        });

        setIsAuthenticated(res.data.authenticated);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    }

    authCheck();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthProtectedLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ContentProtectedLayout />}>
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
