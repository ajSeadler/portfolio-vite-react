import React from "react";

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <p style={{ color: "#fff" }}>
        Please Wait While I Find This Loading Bug...
      </p>
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingSpinner;
