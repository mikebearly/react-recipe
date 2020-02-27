import React from 'react';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from "../src/components/App";

document.addEventListener("DOMContentLoaded", () => {
    render(
      <App />,
      document.body.appendChild(document.createElement("div"))
    );
  });
  
