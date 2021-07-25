import React from "react";
import CharactersPage from "pages/characters";

type Route = {
  component: React.FC<any>,
  path: string,
  exact?: boolean,
};

const routes : Array<Route> = [{
  component: CharactersPage,
  path: '/',
  exact: true,
}];

export default routes;