import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "../node_modules/font-awesome/css/font-awesome.min.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
