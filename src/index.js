import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// You can include output.css but minify.css is minified version of output.css ( Better Performance with minify.css )
import "./css/minify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
