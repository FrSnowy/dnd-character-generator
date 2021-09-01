import React from "react";
import ReactDOM from "react-dom";
import App from "features/App";
import "normalize.css";
import rootStore from "config/store";
import { Provider } from "mobx-react";
import { createLocale } from "config/locale";
import { Router } from 'react-router';
import { browserHistory } from "config/history";

document.addEventListener("DOMContentLoaded", () => {
  createLocale();
  ReactDOM.render(
    <Provider {...rootStore}>
      <Router history={browserHistory}>
        <App />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
});
