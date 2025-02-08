import "./index.css";
import App from "./App.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FiltersProvider } from "./context/filtersProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>
);
