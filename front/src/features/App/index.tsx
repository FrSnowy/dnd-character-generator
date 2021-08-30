import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "config/routes";
import history from "config/history";
import { inject, observer } from "mobx-react";
import { AppStoreProps } from "./store/types";

const listOfRouteComponents: Array<JSX.Element> = routes.map((route) => (
  <Route path={route.path} exact={route.exact} key={route.path} component={route.component} />
));

/**
 * Components resolves routes from config/routes to react-router-dom routes
 * @returns Switch-wrapped routes
 */
const App: React.FC<AppStoreProps> = ({ AppStore }) => {
  React.useEffect(() => {
    AppStore!.changeLang(AppStore!.lang);
  }, []);

  return (
    <Router history={history}>
      <Switch>{listOfRouteComponents}</Switch>
    </Router>
  );
}

export default inject('AppStore')(observer(App));
