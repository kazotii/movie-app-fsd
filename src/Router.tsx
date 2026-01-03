import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/MovieAllHomePage";
import { MovieDetails } from "./pages/MovieSinglePage";
import { Layout } from "./Layout";
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