/** @format */

import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ element, restricted }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return isAuthenticated ? (
    <Navigate to="/crash" /> // Redirect to dashboard if authenticated and trying to access restricted route
  ) : (
    element
  );
};

export default PublicRoute;
