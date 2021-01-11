import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App/App.container";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
