import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateToRouts() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{ border: "1px solid black" }}
      >
        landing page route
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
        style={{ border: "1px solid black" }}
      >
        dashboard route
      </button>
    </>
  );
}

export default NavigateToRouts;
