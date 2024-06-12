import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./components/Routes";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import DetailsSurah from "./components/DetailsSurah";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "detailssurah/:id",
        element: <DetailsSurah />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
