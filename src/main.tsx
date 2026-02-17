import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

window.APP_INITIALIZED = true;

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
