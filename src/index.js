import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/Context";
// import { UserContextProvider } from "./context/userContext";

import { GoogleOAuthProvider } from "@react-oauth/google";
// require("dotenv").config();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="181399486709-700hdg6ir2o0b0cskpajsoq7fpfctvcj.apps.googleusercontent.com">
      {/* <UserContextProvider> */}
      <AppContextProvider>
        <App />
      </AppContextProvider>
      {/* </UserContextProvider> */}
    </GoogleOAuthProvider>
    ;
  </React.StrictMode>
);
