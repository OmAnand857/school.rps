import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import "./index.css";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<><BrowserRouter><App/></BrowserRouter></>);
