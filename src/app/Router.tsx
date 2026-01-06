import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { MovieDetails } from "../pages/MoviePage";
import { Layout } from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import { FavoritePage } from "../pages/FavoritePage";

export const MovieRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
      { 
        path: "*",
        element: <ErrorPage /> 
      },
    ],
  },
]);
