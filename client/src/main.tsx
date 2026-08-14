// COCO Design style reminder: keep the entry layer invisible and resilient so the warm editorial interface can recover without interrupting the visitor.
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const CHUNK_RELOAD_KEY = "coco-design:chunk-reload-once";

window.addEventListener("vite:preloadError", (event) => {
  event.preventDefault();

  if (sessionStorage.getItem(CHUNK_RELOAD_KEY) === "1") {
    sessionStorage.removeItem(CHUNK_RELOAD_KEY);
    return;
  }

  sessionStorage.setItem(CHUNK_RELOAD_KEY, "1");
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
