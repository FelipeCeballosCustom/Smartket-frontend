import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterPrincipal from "./routes/routerPrincipal"; //Se importa el componente de las rutas
import '../src/index.css'; //Se importan estilos globales


const router = RouterPrincipal;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={RouterPrincipal} />
  </React.StrictMode>
);
