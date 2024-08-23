/** @format */

// PublicRoute.jsx
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/crash" /> // Redirect to dashboard if authenticated and trying to access restricted route
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
