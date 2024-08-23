/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// import custom pages
import Register from "./pages/auth/register";
import Signup from "./pages/auth/signin";
import Replacement from "./pages/replacement";
import reportWebVitals from "./reportWebVitals";
import Crash from "./pages/crash";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signup" element={<Register />} />
          <Route path="/auth/signin" element={<Signup />} />
          <Route path="/" element={<Navigate to="/auth/signin" />} />
          <Route path="/replacement" element={<Replacement />} />
          <Route path="/crash" element={<Crash />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
