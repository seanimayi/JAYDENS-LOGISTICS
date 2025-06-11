import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Body from './Admin_Page/Body'
import './index.css'

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
