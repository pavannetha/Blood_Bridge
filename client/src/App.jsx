import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProtectedLayout from "./ProtectedLayouts/AuthProtectedLayout";
import ContentProtectedLayout from "./ProtectedLayouts/ContentProtectedLayout";
import FallBackComponent from "./components/FallBackComponent";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthProtectedLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<ContentProtectedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<FallBackComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
