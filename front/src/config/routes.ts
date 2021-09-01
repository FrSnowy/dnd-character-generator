import React from "react";
import AuthAndRegisterPage from "pages/auth-and-register";

type Route = {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
};

const routes: Array<Route> = [
  {
    component: AuthAndRegisterPage,
    path: "/",
    exact: true,
  },
  {
    component: AuthAndRegisterPage,
    path: "/register",
    exact: true,
  }
];

export default routes;
