import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
if ((window as any).log) (window as any).log("App React 1.4.7 OK.");
window.APP_INITIALIZED = true;
root.render(<App />);
