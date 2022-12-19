import Error from "./pages/error";
import Home from "./pages/home";

const routes = () => [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
