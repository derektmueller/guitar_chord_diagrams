
require('./style/index.scss');
import "babel-polyfill";
import App from "./components/App.jsx";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
