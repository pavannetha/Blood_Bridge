import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { contextData } from "../components/ContextAPI";

export default function AuthProtectedLayout() {
  const { isAuthenticated, loading } = useContext(contextData);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
