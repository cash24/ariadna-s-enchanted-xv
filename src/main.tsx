import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

window.APP_INITIALIZED = true;
if ((window as any).log) (window as any).log("✅ App 1.5.1 OK.");

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
