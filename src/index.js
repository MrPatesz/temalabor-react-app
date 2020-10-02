import React from "react";
import ReactDOM /*, { unstable_renderSubtreeIntoContainer }*/ from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/Home_page";

ReactDOM.render(
  <Router>
    <div className="menu-div">
      <div className="home-page">
        <Link to="/">Home</Link>
      </div>
      <div className="playlist-page">
        <Link to="/Playlist">Playlist</Link>
      </div>
      <div classNam="add-song-page">
        <Link to="/Add Song">Add Song</Link>
      </div>
    </div>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/Playlist">
        Show this on Playlist page
      </Route>
      <Route path="/Add Song">
        Show this on Add Song page
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();