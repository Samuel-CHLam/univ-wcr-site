import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./components/App.js";

// renders React Component "Root" into the DOM element with ID "root"
const container = document.getElementById("root");
const root = createRoot(container);
const GOOGLE_CLIENT_ID = "898758163126-h7cjk1no80teslljkae2h86nrgoh57qr.apps.googleusercontent.com";

root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// allows for live updating
module.hot.accept();
