import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./store/index";
import "./index.css";
import App from "./App";

// Get the root element
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Render the application
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
