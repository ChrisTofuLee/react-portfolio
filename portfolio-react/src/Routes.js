import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Portfolio from "./components/Portfolio";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
          <Home />
      </Route>
      <Route path="/portfolio" exact>
          <Portfolio />
      </Route>
      {/* <Route path="/about" exact component={About} /> */}
    </Switch>
  );
};

export default Routes;
