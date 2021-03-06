import "./wdyr";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import App from "screens/test";
import reportWebVitals from "./reportWebVitals";
import { loadServer, DevTools } from "jira-dev-tool";
// 务必在jira-dev-tool引入
import { AppProviders } from "context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

loadServer(() => {
  root.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
