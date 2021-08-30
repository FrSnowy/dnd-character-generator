import React from "react";
import ReactDOM from "react-dom";
import App from "features/App";
import "normalize.css";
import rootStore from "config/store";
import { Provider } from "mobx-react";
import { createLocale } from "config/locale";

document.addEventListener("DOMContentLoaded", () => {
  createLocale();
  ReactDOM.render(
    <Provider {...rootStore}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
