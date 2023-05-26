import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
// import express from "express";
// import * as path from "path";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// App.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

// App.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });
