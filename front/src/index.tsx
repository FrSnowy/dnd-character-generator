import React from "react";
import ReactDOM from "react-dom";
import App from "features/App";
import "normalize.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
});
