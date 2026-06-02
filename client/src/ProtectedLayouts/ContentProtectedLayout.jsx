import React from "react";
import { Outlet } from "react-router-dom";

export default function ContentProtectedLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
