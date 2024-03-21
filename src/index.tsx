import { createRoot } from "react-dom/client";
import { App } from "./App";

const container = document.getElementById("root");
const root = createRoot(container!);

async function enableMocking() {
  const { worker } = await import("./mocks/browser");

  return worker.start();
}

enableMocking().then(() => root.render(<App />));
