import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LargeOrder from "./pages/LargeOrder";
import MainHome from "./pages/MainHome";
import Profile from "./pages/Profile";
import MainOrder from "./pages/MainOrder ";
import Cart from "./pages/Cart";
import Promotion from "./pages/Promotion";
import Promotion2 from "./pages/Promotion2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/promotion",
    element: <Promotion />,
  },
  {
    path: "/promotion2",
    element: <Promotion2 />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/home",
    element: <MainHome />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/menus",
    element: <Order />,
  },
  {
    path: "/main-menus",
    element: <MainOrder />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/large-orders",
    element: <LargeOrder />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
