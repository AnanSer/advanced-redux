import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/index";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <provider store={store}>
    <App />
  </provider>,
  document.getElementById("root")
);
