import { createRoot } from "react-dom/client";
import AltTexter from "./components/AltTexter";
import OptionsPage from "./components/OptionsPage";

const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get("page");

const container = document.getElementById("root");
const root = createRoot(container);

if (page === "options") {
  root.render(<OptionsPage />);
} else {
  root.render(<AltTexter />);
}

