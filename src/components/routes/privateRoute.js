/** @format */

// PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element, restricted }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return !isAuthenticated ? (
    <Navigate to="/auth/signin" /> // Redirect to signin if not authenticated
  ) : (
    element
  );
};

export default PrivateRoute;
