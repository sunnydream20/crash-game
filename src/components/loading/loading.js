/** @format */

// Loading.js
import React from "react";
import "./loading.css"; // Import CSS for styling

const Loading = () => {
  return (
    <div className="loading-overlay">
      <div className="loading-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
