import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import validation script for browser console use (available in all environments)
import('./utils/validateIntentRewrites');

// Render the app first
createRoot(document.getElementById("root")!).render(<App />);

// Signal to prerender plugin that app is ready for capture
document.dispatchEvent(new Event("app-rendered"));
