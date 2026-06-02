import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ContentProtectedLayout({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
