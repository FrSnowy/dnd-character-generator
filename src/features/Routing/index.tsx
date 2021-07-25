import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "config/routes";
import history from "config/history";

const listOfRouteComponents: Array<JSX.Element> = routes.map((route) => (
  <Route path={route.path} exact={route.exact} key={route.path}>
    {route.component}
  </Route>
));

/**
 * Components resolves routes from config/routes to react-router-dom routes
 * @returns Switch-wrapped routes
 */
const Routing: React.FC<{}> = () => (
  <Router history={history}>
    <Switch>{listOfRouteComponents}</Switch>
  </Router>
);

export default Routing;
