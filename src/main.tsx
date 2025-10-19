import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./components/App.tsx"
import CreateMatch from "./services/CreateMatch.tsx"

createRoot(document.getElementById("root")!).
render(
    <StrictMode>
        <CreateMatch />
    </StrictMode>
)