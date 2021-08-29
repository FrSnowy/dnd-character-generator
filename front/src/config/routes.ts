import React from "react";
import AuthPage from "pages/auth";

type Route = {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
};

const routes: Array<Route> = [
  {
    component: AuthPage,
    path: "/",
    exact: true,
  },
];

export default routes;
