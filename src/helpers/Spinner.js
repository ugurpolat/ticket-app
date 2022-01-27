import React from "react";
import loading from "../assets/loading.gif";

export default function Spinner() {
  return (
    <img
      src={loading}
      alt="loading..."
      style={{ width: "50px", margin: "auto", display: "block" }}
    />
  );
}
