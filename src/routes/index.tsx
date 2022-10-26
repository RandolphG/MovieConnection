import React, { FC, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router";
import { PrivateRoute, PublicRoute } from "./helper";
import App from "../App";
import { Registration, NotFound, Login } from "../components";

/*A route object has the same properties as a <Route>
element. The `children` is just an array of child routes.*/
let index: RouteObject[] = [
  {
    path: "/",
    element: (
      <PublicRoute>
        <App />
      </PublicRoute>
    ),
  },

  {
    path: "registration",
    element: (
      <PublicRoute>
        <Registration />
      </PublicRoute>
    ),
  },
  {
    path: "login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
];

/**
 * application router
 * @returns {JSX.Element}
 */
const AppRouter: FC = () => {
  let element = useRoutes(index);

  return <Suspense fallback={<></>}>{element}</Suspense>;
};

export default AppRouter;
