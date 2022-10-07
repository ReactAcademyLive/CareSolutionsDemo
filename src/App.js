import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigation,
} from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import "./custom.scss";
import Menu from "./Menu";

import Home from "./home/Home";
import About from "./about/About";
import { Counter } from "./counter/Counter";
import Videos from "./videos/Videos";
import Covid from "./covid/Covid";
import Animal from "./animal/Animal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "counter",
        element: <Counter init={5} />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      {
        path: "covid",
        loader: () => {
          return fetch("https://disease.sh/v3/covid-19/countries?sort=cases");
        },
        element: <Covid />,
      },
      {
        path: "animal",
        element: <Animal />,
      },
    ],
  },
]);

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <Menu />
      <Container>
        {navigation.state === "loading" ? (
          <Spinner variant="primary" animation="border" />
        ) : (
          <Outlet />
        )}
      </Container>
    </>
  );
}

export function App() {
  return <RouterProvider router={router} />;
}
