import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";
import FindPoints from "./pages/FindPoints";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/" />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={FindPoints} path="/find-point" />
    </BrowserRouter>
  );
};

export default Routes;
