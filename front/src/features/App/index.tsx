import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "config/routes";
import history from "config/history";
import { createLocale, setCurrentLocale } from "config/locale";

const listOfRouteComponents: Array<JSX.Element> = routes.map((route) => (
  <Route path={route.path} exact={route.exact} key={route.path} component={route.component} />
));

/**
 * Components resolves routes from config/routes to react-router-dom routes
 * @returns Switch-wrapped routes
 */
const App: React.FC<{}> = () => {
  React.useEffect(() => {
    createLocale();
    setCurrentLocale('ru');
  }, []);

  return (
    <Router history={history}>
      <Switch>{listOfRouteComponents}</Switch>
    </Router>
  );
}

export default App;
