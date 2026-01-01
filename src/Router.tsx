import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/HomePage";
import { MovieDetails } from "./pages/MovieDetails";
import { Layout } from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

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
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);