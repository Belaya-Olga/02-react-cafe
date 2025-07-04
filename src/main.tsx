import { createRoot } from "react-dom/client";
import App from "./components/App/App.tsx";

import "modern-normalize/modern-normalize.css";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
