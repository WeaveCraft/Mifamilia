import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";


createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}>

    <Router>
        <App />
    </Router>
    </GoogleOAuthProvider>
)

// ReactDOM.render(
// <Router>
// <App />
// </Router>,

//  document.getElementById("root")
//  );