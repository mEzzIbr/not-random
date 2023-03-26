import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import "./services/i18n";

const SUPABASE_HEADERS = {
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcmFvbWNqd2dxYm9iZXV0Z25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzMzI4OTQsImV4cCI6MTk3ODkwODg5NH0.8a0gVJrfNyuOSXhcasVedebgFaQn8oUVFleHc6gKCBU",
  Authorization:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrcmFvbWNqd2dxYm9iZXV0Z25hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjMzMzI4OTQsImV4cCI6MTk3ODkwODg5NH0.8a0gVJrfNyuOSXhcasVedebgFaQn8oUVFleHc6gKCBU",
};

// request interceptor

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
      "Bearer " + SUPABASE_HEADERS.Authorization;
    config.headers["apikey"] = SUPABASE_HEADERS.apikey;

    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
