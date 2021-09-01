import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "config/routes";
import { inject, observer } from "mobx-react";
import { AppModelT } from "models/AppModel/types";

const listOfRouteComponents: Array<JSX.Element> = routes.map((route) => (
  <Route path={route.path} exact={route.exact} key={route.path} component={route.component} />
));

/**
 * Components resolves routes from config/routes to react-router-dom routes
 * @returns Switch-wrapped routes
 */
const App: React.FC<AppModelT> = ({ AppModel }) => {
  React.useEffect(() => {
    AppModel!.changeLang(AppModel!.lang);
  }, []);

  return <Switch>{listOfRouteComponents}</Switch>;
}

export default inject('AppModel')(observer(App));
