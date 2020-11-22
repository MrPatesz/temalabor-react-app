import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddSongsPage from "./Pages/AddSongsPage";

var savedQueue = [];

ReactDOM.render(
  <Router>
    <div className="menu-div">
      <div className="home-menu">
        <Link to="/">Home</Link>
      </div>
      <div className="playlist-menu">
        <Link to="/playlist">Playlist</Link>
      </div>
      <div className="add-songs-menu">
        <Link to="/add-songs">Add Songs</Link>
      </div>
    </div>
    <Switch>
      <Route exact path="/">
        <HomePage savedQueue={savedQueue} />
      </Route>
      <Route path="/playlist">
        Show this on Playlist page
      </Route>
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
