import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Form  from "../components/Form";
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
    element:<Landscape />,
  },
  {
     path:"/formulario",
     element:<Form />,
   }
]);

export default RouterPrincipal;