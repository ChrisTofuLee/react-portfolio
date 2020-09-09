import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Portfolio from "./components/Portfolio";
import About from "./components/About"
const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact>
          <Home />
      </Route>
      <Route path="/portfolio" exact>
          <Portfolio />
      </Route>
      <Route path="/about" exact>
          <About />
      </Route>
    </Switch>
  );
};

export default Routes;
