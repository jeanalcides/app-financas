
import { createRoot } from "react-dom/client";
import "./global.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App />
);
