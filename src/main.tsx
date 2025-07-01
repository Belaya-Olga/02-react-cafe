import { createRoot } from "react-dom/client";
import React from "react";
import App from "./components/App/App.tsx";
import VoteOptions from "./components/VoteOptions/VoteOptions.tsx";

import "modern-normalize/modern-normalize.css";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
