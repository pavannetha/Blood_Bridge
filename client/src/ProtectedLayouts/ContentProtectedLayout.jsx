import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";
import { contextData } from "../components/ContextAPI";

export default function ContentProtectedLayout() {
  const { isAuthenticated, loading } = useContext(contextData);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}
