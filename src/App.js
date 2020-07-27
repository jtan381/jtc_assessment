import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";


export default function App() {
  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  );
}
