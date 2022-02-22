import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "../src/css/index.css";
import Contact from "./Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
