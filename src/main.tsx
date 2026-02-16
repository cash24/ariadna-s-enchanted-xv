import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
window.APP_INITIALIZED = true;
root.render(<App />);
