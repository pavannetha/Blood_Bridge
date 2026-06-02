import React from "react";
import { Link } from "react-router-dom";

export default function FallBackComponent() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Home</Link>
    </div>
  );
}
