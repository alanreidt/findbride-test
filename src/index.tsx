import React from "react";
import { AppContainer } from "./components/AppContainer";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <AppContainer />
);
