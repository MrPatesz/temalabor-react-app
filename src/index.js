import React from "react";
import ReactDOM /*, { unstable_renderSubtreeIntoContainer }*/ from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Song from "./Song.js";
import Artist from "./Artist";
import Playlist from "./Playlist";
import Mock from "./Mock";

// #region Creating Songs
var song1 = new Song(
  new Artist(
    "Kid Cudi",
    "https://open.spotify.com/artist/0fA0VVWsXO9YnASrzqfmYu?si=spQ4ByN1SiWV_5DaKopFAQ"
  ),
  "Soundtrack 2 My Life",
  "https://open.spotify.com/track/0Ns3nvzgfC6Yh3j5apV66n?si=n_Kig2b8Q-eS-GAr7kPihA"
);
var song2 = new Song(
  new Artist(
    "XXXTENTACION",
    "https://open.spotify.com/artist/15UsOTVnJzReFVN1VCnxy4?si=F_XDikgeQBSOIxrQkR__rw"
  ),
  "Train Food",
  "https://open.spotify.com/track/5lar0mCUejpILVkAz50s2J?si=5EVCZxNrQDGRYZayujln5g"
);
var song3 = new Song(
  new Artist(
    "A$AP Rocky",
    "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca?si=yKI2UbB2QEyUNkHgy0t1JQ"
  ),
  "Sundress",
  "https://open.spotify.com/track/2aPTvyE09vUCRwVvj0I8WK?si=cyUiQFFrTV-CPYMbpWRY0A"
);
// #endregion

var songArray = [song1, song2, song3];
var mock = new Mock();

ReactDOM.render(
  <div className="big-container">
    <div className="genre-div">
      <h1> Genres </h1>
    </div>
    <div className="artist-div">
      <h1> Artists </h1>
      <ul>
        {mock.artists.map((artist) => (
          <li>{artist.name}</li>
        ))}
      </ul>
    </div>
    <div className="album-div">
      <h1> Albums </h1>
      <ul>
        {mock.artists.map((artist) => (
          <div>
            {artist.albums.map((album) => (
              <li
                onClick={() => {
                  console.log(album.title);
                }}
              >
                {album.title}
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
    <div className="selection-div">
      <h1> Selection </h1>
      <div>
        <Playlist songs={songArray} />
      </div>
    </div>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

/*
    <div className="album-div">
      <h1> Albums </h1>
      <ul>
        {mock.artists.map((artist) => (
          <li>
            {artist.name}
            <ul>
              {artist.albums.map((album) => (
                <li>{album.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
*/
