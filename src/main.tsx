import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeApiProvider } from "./api/apiProvider";

// Initialize API provider with token authentication
initializeApiProvider();

createRoot(document.getElementById("root")!).render(<App />);
