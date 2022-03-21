import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { ProductProvider } from "./context/product-context";
// Call make Server
makeServer();


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <App />
        <Router />
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
