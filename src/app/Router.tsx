import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "../pages/HomePage";
import { MoviePage } from "../pages/MoviePage";
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
        element: <MoviePage />,
      },
      {
        path: "/favorites",
        element: <FavoritePage />,
      },
    ],
  },
]);
