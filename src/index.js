import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { store } from "./redux/store/store";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes></AppRoutes>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);