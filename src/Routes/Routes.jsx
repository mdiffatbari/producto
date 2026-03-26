import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation/Installation";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path:"/apps",
          loader: () => fetch("appData.json"),
          Component: Apps
        },
        {
          path:"/installation",
          Component: Installation
        }
    ]
  },
]);