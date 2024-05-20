import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Routing from "./Routing";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GlobalFont /> */}
    <GlobalStyle />
    <Routing />
  </React.StrictMode>
);
reportWebVitals();
