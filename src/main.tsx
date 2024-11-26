import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error("Кореневий елемент не знайдено");
}
