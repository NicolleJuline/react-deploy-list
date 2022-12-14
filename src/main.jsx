import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./components/Button";
import "./index.css";
import { ContainerContextProvider } from "./context/Container";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContainerContextProvider>
    <App />
    </ContainerContextProvider>
    
    {/* <Button /> */}
  </React.StrictMode>
);
