import React from "react";
import { Route } from "react-router-dom";

import Login from "../views/Login";
import Register from "../views/Register";
import Result from "../views/Result";

export default [
  <Route exact key="login" path="/" component={Login} />,
  <Route exact key="register" path="/Register" component={Register} />,
  <Route exact key="result" path="/Result" component={Result} />,

  // <Route key="404" path="*" component={NotFound} />,
];
