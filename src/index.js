import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Navbar from "./components/Navbar";

import "./index.css";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<><App/></>);
