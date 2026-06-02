import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthProtectedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
