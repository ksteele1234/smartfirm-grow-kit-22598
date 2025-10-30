import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import validation script for browser console use (available in all environments)
import('./utils/validateIntentRewrites');

createRoot(document.getElementById("root")!).render(<App />);
