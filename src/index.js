import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddSongsPage from "./Pages/AddSongsPage";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

var savedQueue = [];

ReactDOM.render(
  <Router>
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Link className="nav-link text-info" to="/">
          Home
        </Link>
        <Link className="mr-auto nav-link text-info" to="/add-songs">
          Add Songs
        </Link>
      </Nav>
    </Navbar>
    <Switch>
      <Route exact path="/">
        <HomePage savedQueue={savedQueue} />
      </Route>
      <Route path="/playlist">Show this on Playlist page</Route>
      <Route path="/add-songs">
        <AddSongsPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
