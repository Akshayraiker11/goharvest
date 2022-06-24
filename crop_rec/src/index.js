import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./crop_index.css"

import App from "./crop_App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);