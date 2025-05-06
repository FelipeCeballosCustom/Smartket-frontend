import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Landscape from "../pages/Landscape";
import Graphs from "../pages/Graphs";
import Scanner from "../pages/Scanner";


const RouterPrincipal = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/inicio",
    element: <Landscape />,
  },
  {
    path: "/graficos",
    element: <Graphs />,
  },
  {
    path: "/scanner",
    element: <Scanner />,
  },
  {
    path:"/",
    element:<Landing />,
  }
]);

export default RouterPrincipal;