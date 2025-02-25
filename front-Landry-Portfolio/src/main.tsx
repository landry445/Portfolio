import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
