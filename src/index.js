import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Blog from "./Pages/Blog";
import Listing from "./Pages/Listing";
import reportWebVitals from "./reportWebVitals";
import Youtube from "./Pages/Youtube";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/listing" element={<Listing />}></Route>
        <Route exact path="/youtube" element={<Youtube />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
