import React from "react";
import HomePage from "../main/HomePage"
import AppBar from "../header/AppBar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from "../contact/Contact";
import Men from "../docs/Men";
import Women from "../docs/Women";
import Shabes from "../docs/Shabes";

export default function Main() {

  return (
    <div className="Main" >
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Men">
            <Men />
          </Route>
          <Route path="/Women">
            <Women />
          </Route>
          <Route path="/Shabat">
            <Shabes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
