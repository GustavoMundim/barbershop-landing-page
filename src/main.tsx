import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { Header } from "./components/organisms/header/Header.tsx";
import { GlobalStyles } from "./styles/globals.ts";
import { HeaderContextProvider } from "./context/HeaderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeaderContextProvider>
      <GlobalStyles />
      <Header />
      <App />
    </HeaderContextProvider>
  </StrictMode>
);
