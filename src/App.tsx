import { createBrowserRouter } from "react-router";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import Login from "./pages/login/Login";
import Networks from "./pages/networks/Networks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  },
  {
    path: '/admin/social',
    element: <Networks/>
  }
])

export {router};
