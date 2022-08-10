import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./ApiContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApiProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApiProvider>      
);
