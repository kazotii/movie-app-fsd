import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { MovieDetails } from "../pages/MoviePage";
import { Layout } from "./Layout";
import { FavoritePage } from "../pages/FavoritePage";

export const MovieRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
    ],
  },
]);
