import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./routes";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ActivityTracker } from "./components/ActivityTracker";
// import { UserProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  );
}
