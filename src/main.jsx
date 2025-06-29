import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./context/Context.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <DarkModeProvider>
    <div className="bg-[var(--bg-custom-color)] font-Manrope">
      <App />
    </div>
  </DarkModeProvider>
);
