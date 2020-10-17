import React from "react";
import ReactDOM /*, { unstable_renderSubtreeIntoContainer }*/ from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddSongPage from "./Pages/AddSongPage";
import Mock from "./Mock";

var mock = new Mock();

ReactDOM.render(
  <Router>
    <div className="menu-div">
      <div className="home-page">
        <Link to="/">Home</Link>
      </div>
      <div className="playlist-page">
        <Link to="/playlist">Playlist</Link>
      </div>
      <div classNam="add-songs-page">
        <Link to="/add-songs">Add Songs</Link>
      </div>
    </div>
    <Switch>
      <Route exact path="/">
        <HomePage mock={mock}/>
      </Route>
      <Route path="/playlist">
        Show this on Playlist page
      </Route>
      <Route path="/add-songs">
        <AddSongPage mock={mock}/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();