import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthProtectedLayout({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
