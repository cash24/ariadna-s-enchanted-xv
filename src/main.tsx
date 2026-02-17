import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

window.APP_INITIALIZED = true;
if ((window as any).log) (window as any).log("📦 App 1.4.8 Lanzada");

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
