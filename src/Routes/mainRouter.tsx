import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Dribble from "../Pages/Dribble";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/Dribb",
        element: <Dribble />,
      },
    ],
  },
]);
